const express = require('express');
const router = express.Router();

// Item Model
const Quizstamp = require('../../models/Quizstamp');

// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {
  Quizstamp.find()
    .sort({ score: -1 })
    .select('-email')
    .then(quizstamps => res.json(quizstamps));
});

// add item (private route)
router.post('/', (req, res) => {

  const newQuizstamp = new Quizstamp({
    name: req.body.name,
    email: req.body.email,
    score: req.body.score
  });

  newQuizstamp.save().then(quizstamp => res.json(quizstamp)); // make sure you don't have to make this 'quizstamp' and not 'quizdata'
});


module.exports = router;