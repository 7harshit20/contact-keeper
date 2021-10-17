const mongoose = require('mongoose');

const ContactSchema = {
    name: {
        type: String,
        isRequired: true,
        unique: true
    },
    email: {
        type: String,
        isRequired: true
    },
    number: {
        type: Number,
        isRequired: true,
        unique: true
    },
    type: {
        type: Enum,
        isRequired: true
    },
}