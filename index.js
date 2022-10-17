var express = require('express');
var app = express();
var things = require('./things');
var fruits = require('./fruit');
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res){
    res.sendFile(__dirname + '/home.html');
});

app.get('/first_template', function (req, res) {
    res.render('first_view');
});

app.get('/dynamic_view', function (req, res) {
    res.render('dynamic', {
        name: "Zeeve Test Project",
        url: "https://www.zeeve.io/"
    });
});

app.get('/login/:name/:id([0-9]{4})', function (req, res) {
    res.render('login', {
        name: req.params.name,
        id: req.params.id
    });
});

app.use('/things', things);

app.use('/fruit', fruits);

app.get('*', function (req, res) {
    res.send(`Invalid Attempt`);
});

app.listen(3000);