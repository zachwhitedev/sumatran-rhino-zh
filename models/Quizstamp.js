const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const QuizstampSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    score: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Quizstamp = mongoose.model('quizstamps', QuizstampSchema);