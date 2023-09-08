const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const userRouter = require('./routes/user')
const adminRouter = require('./routes/admin')
const sessionRouter = require('./routes/session')
const courseRouter = require('./routes/course')

mongoose.connect('mongodb://0.0.0.0:27017/sabzlearn-cms')
mongoose.Promise = global.Promise

const app = express()

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json({ type : 'application/json' }));

app.use((req, res, next) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')

    next()
})

app.use('/api/users', userRouter)
app.use('/api/admins', adminRouter)
app.use('/api/sessions', sessionRouter)
app.use('/api/courses', courseRouter)

app.listen(4000)