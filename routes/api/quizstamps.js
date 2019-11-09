const express = require('express');
const router = express.Router();

// Item Model
const Quizstamp = require('../../models/Quizstamp');

// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {
  QuizStamp.find()
    .select('-email')
    .then(quizstamps => res.json(quizstamps));
});

// add item (private route)
router.post('/', (req, res) => {

  const newQuizstamp = new Quizstamp({
    name: req.body.name
  });

  newQuizstamp.save().then(quizstamp => res.json(quizstamp)); // make sure you don't have to make this 'quizstamp' and not 'quizdata'
});


module.exports = router;