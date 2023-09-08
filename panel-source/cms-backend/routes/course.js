const express = require('express')
const Course = require('./../models/Course')

const router = express.Router();

router.get('/', (req, res) => {
    Course.find({}).then(courses => {
        console.log(courses)
        res.json(courses)
    })
})

router.post('/', (req, res) => {

    const date = new Date()

    const configs = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    const newCourse = new Course({
        title: req.body.title,
        body: req.body.body,
        time: req.body.time,
        price: req.body.price,
        students: req.body.students,
        category: req.body.category,
        cover: req.body.cover,
        created_AT: date.toLocaleDateString('fa-IR', configs),
    }).save()

    console.log(req.body)

    res.json('Course Created: ' + req.body)

})

router.delete('/:id', (req, res) => {
    Course.findByIdAndDelete(req.params.id).then(mainCourse => {
        res.json('Delete Successfully')
    })
})

module.exports = router;
