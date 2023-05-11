const mongoose = require('mongoose');  
  
  // Clients
  const clients = [
    {
      _id: new mongoose.Types.ObjectId('5f083c352a7908662c334532'),
      name: 'Tony Stark',
      email: 'ironman@gmail.com',
      phone: '343-567-4333',
    },
    {
      _id:  new mongoose.Types.ObjectId('645b34ef91d0acf4d48401ce'),
      name: 'Natasha Romanoff',
      email: 'blackwidow@gmail.com',
      phone: '223-567-3322',
    },
    {
      _id: new mongoose.Types.ObjectId('645b34ef91d0acf4d48401cd'),
      name: 'Thor Odinson',
      email: 'thor@gmail.com',
      phone: '324-331-4333',
    },
  ];
  
  module.exports = { clients };