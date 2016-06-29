var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.redirect('/home')
});

router.get('/home', function(req, res, next) {
    res.render('index', { title: 'Act-Mai Draw-Mai' })
});

router.get('/rules', function(req, res, next) {
    res.render('rules', { title: 'Nga Ture'})
});


module.exports = router;
