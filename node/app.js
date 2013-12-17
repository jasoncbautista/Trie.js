
var express = require('express');
var app = express();

app.get('/', function(req, res) {
      res.type('text/plain'); // set content-type
        res.send('i am a beautiful butterfly'); // send text response
});

var quotes = [
      { author : 'Audrey Hepburn', text : "Nothing is impossible, the word itself says 'I'm possible'!"},
        { author : 'Walt Disney', text : "You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you"},
          { author : 'Unknown', text : "Even the greatest was once a beginner. Don't be afraid to take that first step."},
            { author : 'Neale Donald Walsch', text : "You are afraid to die, and you're afraid to live. What a way to exist."}
];


// example:
// http://localhost:4730/quote/1
app.get('/quote/:id', function(req, res) {
    if(quotes.length <= req.params.id || req.params.id < 0) {
        res.statusCode = 404;
        return res.send('Error 404: No quote found');
    }

    var q = quotes[req.params.id];
    res.json(q);
});

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);


app.get('/about', function (req, res) {
            res.render('index.html');
});


app.listen(process.env.PORT || 4730);


