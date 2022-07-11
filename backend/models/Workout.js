const mongoose = require('mongoose')


const workoutSchema = new mongoose.Schema({
    title: {
        type: String
    },
    reps: {
        type: Number,
        required: true
    }, 
    load: {
        type: Number,
        required: true
    }
}, {timestamps: true})

// collection will be created by this
module.exports = mongoose.model("Workout", workoutSchema)