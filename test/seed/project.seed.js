const mongoose = require('mongoose');

// Projects
const projects = [
    {
      _id:new  mongoose.Types.ObjectId('645b3b027d6310e97685a776'),
      client_Id: new mongoose.Types.ObjectId('645b3620c17619da4b7c477b'),
      name: 'eCommerce Website',
      description:
        'test project 1',
      status: 'ToDo',
    },
    {
      _id: new mongoose.Types.ObjectId('645b397e1f73c9b9556587c9'),
      client_Id: new mongoose.Types.ObjectId('645b34ef91d0acf4d48401ce'),
      name: 'Dating App',
      description:
        'test project 2',
      status: 'In Progress',
    },
    {
      _id: new mongoose.Types.ObjectId('645b3750c90022e018d171f4'),
      client_Id: new mongoose.Types.ObjectId('645b34ef91d0acf4d48401ce'),
      name: 'SEO Project',
      description:
        'test project 3',
      status: 'Completed',
    },
  ];

  
  module.exports = { projects };