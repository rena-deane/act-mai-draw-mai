var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.redirect('/kaenga')
});

router.get('/kaenga', function(req, res, next) {
    res.render('index', { title: 'Act-Mai Draw-Mai' });
});

router.get('/ngature', function(req, res, next) {
    res.render('ngature', { title: 'Nga Ture'});
});

module.exports = router;
