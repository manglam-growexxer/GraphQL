const express = require('express');
require ('dotenv').config();
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const Connection = require('./config/connection')
const port = process.env.PORT || 5000;

const app = express();

// connectDB();

const connectionToDb = () => {
    Connection.checkConnection();
  };
  
  connectionToDb();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
}))

module.exports = app.listen (port, console.log(`Server listening on ${port}`));