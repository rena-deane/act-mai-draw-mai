var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('you should not see this')
});

router.get('/new', function(req, res, next) {
    res.send('make your team here')
})

module.exports = router;
