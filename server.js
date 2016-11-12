var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/about', function(req, res){
    res.send('test about');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/loader.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'loader.js'));
});
app.get('/ui/loader.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'loader.css'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/controller-animation.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'controller-animation.css'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
