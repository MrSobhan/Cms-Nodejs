const mongoose = require('mongoose')

let Admin = mongoose.model('Admins', {
    firstName: {
        type: String,
        required: true,
        minLength: 3,
        trim: true
    },

    lastName: {
        type: String,
        required: true,
        minLength: 3,
        trim: true
    },

    userName: {
        type: String,
        required: true,
        minLength: 3,
        trim: true
    },

    password: {
        type: String,
        required: true,
        minLength: 8,
        trim: true
    },

    email: {
        type: String,
        required: true,
        minLength: 10
    },

    profile: {
        type: String,
        required: true
    },

    banner: {
        type: String,
        required: true
    },

    created_AT: {
        type: String,
        required: true
    },

})

module.exports = Admin