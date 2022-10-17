var express = require('express');
var router = express.Router();

router.get('/check', function (req, res) {
    res.send('Things are looking good!');
});

router.post('/', function (req, res) {
    res.send('POST route on things.');
});

router.get('/confirm/:id([0-9]{4})', function (req, res) {
    res.send(`The id you specified is ` + req.params.id);
});

module.exports = router;
