const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')

const workoutRoutes = require('./routes/workouts')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// connect database
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("DB Connected")
}).catch(e => console.log(e.message))

// routes
// prefix path
app.use('/api/workouts', workoutRoutes)

// listen for requests
app.listen(process.env.PORT || 4000, () => {
    console.log("Server started running")
})
