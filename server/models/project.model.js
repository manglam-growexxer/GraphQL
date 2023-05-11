const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        enum: ['ToDo', 'In Progress', 'Completed']
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'client'
    }
});

module.exports = mongoose.model ('project', schema);
