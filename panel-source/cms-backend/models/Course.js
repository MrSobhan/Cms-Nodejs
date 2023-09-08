const mongoose = require('mongoose')

let Course = mongoose.model('Courses', {
    title: {
        type: String,
        required: true,
        minLength: 3,
        trim: true
    },

    body: {
        type: String,
        required: true,
        minLength: 10,
        trim: true
    },

    time: {
        type: String,
        required: true,
    },

    price: {
        type: String,
        required: true
    },

    students: {
        type: Number,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    cover: {
        type: String,
        required: true
    },

    created_AT: {
        type: String,
        required: true
    },


})

module.exports = Course