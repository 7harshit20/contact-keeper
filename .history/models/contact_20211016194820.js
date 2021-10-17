const mongoose = require('mongoose');

const ContactSchema = {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        isRequired: true
    },
    type: {
        type: String,
        default: 'personal'
    },
    date: {
        type: Date,
        default: Date.now
    }
}

module.exports = mongoose.model('User-Contact', ContactSchema);