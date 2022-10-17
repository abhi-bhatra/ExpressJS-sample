var express = require('express');
var router = express.Router();

router.get('/:string', function(req, res){
    res.send(`This fruit name is `+req.params.string);
});

module.exports = router;