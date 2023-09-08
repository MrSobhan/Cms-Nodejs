const express = require('express')
const Admin = require('./../models/Admin')

const router = express.Router();

router.get('/', (req, res) => {
    Admin.find({}).then(admins => {
        console.log(admins)
        res.json(admins)
    })
})

// router.post('/', (req, res) => {

//     const newAdmin = new Admin({
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         userName: req.body.userName,
//         password: req.body.password,
//         email: req.body.email,
//         profile: req.body.profile,
//         banner: req.body.banner,
//         created_AT: "1400/02/03",
//     }).save()

//     console.log(req.body)

//     res.json('Admin Created: ' + req.body)

// })

router.get('/:id', (req, res) => {
    Admin.findById(req.params.id).then(mainAdmin => {
        res.json(mainAdmin)
    })
})

router.put('/:id', (req, res) => {
    Admin.findByIdAndUpdate(
        req.params.id,
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            password: req.body.password,
            email: req.body.email,
        },
        updatedAdmin => {
            res.json(true)
        })
})

module.exports = router;
