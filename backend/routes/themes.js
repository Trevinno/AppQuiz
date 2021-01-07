const express = require('express');
const router = express.Router();
const Theme = require('../models/themes.model');

const idFilter = req => list => list._id === parseInt(req.params.id);

// Routes
router.get('/', (req, res) => {

    Theme.find({ })
        .then((data) => {
            console.log('Themes: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: Something broke');
        });
});

router.post('/save', (req, res) => {
    const data = req.body;

    const newTheme = new Theme(data);

    newTheme.save((error) => {
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


router.get('/:id', (req, res) => {
    Theme.findById(req.params.id)
    .then((data) => {
        console.log('Themes: ', data);
        res.json(data);
    }).catch((error) => {
        console.log('error: Something broke');
    });
});

router.post('/update/:id', (req, res) => {
    Theme.findById(req.params.id)
        .then(el => {
            el.theme = req.body.theme;
            el.picUrl = req.body.picUrl;
            el.points = req.body.points;
            el.save()
                .then(()  => res.json('The update was made'))
                .catch(err => res.status(400).json('Error: '+ err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
  });

  router.post('/delete/:id', (req, res) => {
    Theme.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
  
module.exports = router;