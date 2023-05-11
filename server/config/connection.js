const mongoose = require('mongoose');

const mongoHost = `${process.env.DB_HOST}/${process.env.DB_NAME}`;
const mongoCredetials = process.env.DB_USERNAME ?
    `${process.env.DB_USERNAME}:${encodeURIComponent(process.env.DB_PASSWORD)}@` : '';
const dbUrl = `mongodb://${mongoCredetials}${mongoHost}`;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
class Connection {

  static async connectToDB() {
    await mongoose.connect(dbUrl, options).then(() => {
      console.log('MongoDB is connected');
    }).catch((err) => {
      setTimeout(Connection.connectToDB, 500);
    });
    return mongoose.connection.readyState;
  }

  static async checkConnection() {
    return new Promise(async (resolve) => {
      const db = await mongoose.connection.readyState;
      if (db !== 1) {
        const dbStatus = await Connection.connectToDB();
        resolve(dbStatus);
      } else {
        resolve(db);
      }
    });
  }

}

module.exports = Connection;
