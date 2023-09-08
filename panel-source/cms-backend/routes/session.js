const express = require('express')
const Session = require('./../models/Session')

const router = express.Router();

router.get('/', (req, res) => {
    Session.find({}).then(sessions => {
        console.log(sessions)
        res.json(sessions)
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

    const newSession = new Session({
        title: req.body.title,
        time: req.body.time,
        isFree: req.body.isFree,
        course: req.body.course,
        created_AT: date.toLocaleDateString('fa-IR', configs),
    }).save()

    console.log(req.body)

    res.json('Session Created: ' + req.body)

})

router.delete('/:id', (req, res) => {
    Session.findByIdAndDelete(req.params.id).then(mainSession => {
        res.json('Delete Successfully')
    })
})

module.exports = router;
