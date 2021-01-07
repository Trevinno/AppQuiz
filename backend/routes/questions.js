const express = require('express');
const router = express.Router();
const Question = require('../models/questions.model');

const idFilter = req => list => list._id === parseInt(req.params.id);

// Routes
router.get('/', (req, res) => {
    Question.find({ })
        .then((data) => {
            console.log('Questions: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: Something broke');
        });
});

router.post('/save', (req, res) => {
    const data = req.body;

    const newQuestion = new Question(data);

    newQuestion.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'There is a leaking pipe :(' });
            console.log(error);
            return;
        }
        // BlogPost
        return res.json({
            msg: 'Your data has been saved!!!'
        });
    });
});


router.get('/:theme', (req, res) => {
    Question.find({"theme": req.params.theme})
    .then((data) => {
        console.log('Questions: ', data);
        res.json(data);
    }).catch((error) => {
        console.log('error: Something broke');
    });
});

router.post('/update/:id', (req, res) => {
    Question.findById(req.params.id)
        .then(el => {
            el.question = req.body.question;
            el.multipleChoice = req.body.multipleChoice;
            el.picUrl = req.body.picUrl;
            el.option = req.body.option;
            el.theme = req.body.theme;
            el.save()
                .then(()  => res.json('The update was made'))
                .catch(err => res.status(400).json('Error: '+ err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
  });

  router.post('/delete/:id', (req, res) => {
    Question.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
  
module.exports = router;