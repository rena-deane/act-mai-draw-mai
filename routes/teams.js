var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('you should not see this')
});

router.get('/getstarted', function(req, res, next) {
    res.send('you SHOULD see this')
})

module.exports = router;
