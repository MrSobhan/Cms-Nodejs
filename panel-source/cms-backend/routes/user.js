const express = require('express')
const User = require('./../models/User')

console.log("Model User:", User);

const router = express.Router();

router.get('/', (req, res) => {
    User.find({}).then(users => {
        console.log(users)
        res.json(users)
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

    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        profile: req.body.profile,
        created_AT: date.toLocaleDateString('fa-IR', configs),
    }).save()

    console.log(req.body)

    res.json('User Created: ' + req.body)

})

router.get('/:id', (req, res) => {
    User.findById(req.params.id).then(mainUser => {
        res.json(mainUser)
    })
})

router.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id).then(mainUser => {
        res.json('Delete Successfully')
    })
})

router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(
        req.params.id,
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            profile: req.body.profile,
        },
        updatedUser => {
            res.json(updatedUser)
        })
})

module.exports = router;
