const mongoose = require('mongoose')

let User = mongoose.model('users', {
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
        required: true
    },

    profile: {
        type: String,
        required: true
    },

    created_AT: {
        type: String,
        required: true
    },


})

module.exports = User