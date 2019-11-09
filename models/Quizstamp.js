const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const QuizstampSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    answerone: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Quizstamp = mongoose.model('quizstamps', QuizstampSchema);