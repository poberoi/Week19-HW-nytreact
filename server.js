// Include Server Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

//Require article Schema
var article = require('./models/article.js');

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));


// MongoDB Configuration (using local until depoloyment)
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/nytarticles');

var db = mongoose.connection;

db.on('error', function(err){
  console.log('Mongoose Connection Error: ', err);
});

db.once('open', function(){
  console.log('Mongoose connection successful.');
});

// Index route
app.get('/', function(req, res) {
  res.send(index.html);
});

// Route to get all saved articles
app.get('/api/saved', function(req, res) {

  Article.find({})
    .exec(function(err, doc){

      if(err){
        console.log(err);
      }
      else {
        res.send(doc);
      }
    })
});

// Route to add an article to saved list
app.post('/api/saved', function(req, res){
  var newArticle = new Article(req.body);

  console.log(req.body)

  var title = req.body.title;
  var date = req.body.date;
  var url = req.body.url;

  newArticle.save(function(err, doc){
    if(err){
      console.log(err);
    } else {
      res.send(doc._id);
    }
  });
});

// Route to delete an article from saved list
app.delete('/api/saved/', function(req, res){

  var url = req.param('url');

  Article.find({"url": url}).remove().exec(function(err, data){
    if(err){
      console.log(err);
    }
    else {
      res.send("Deleted");
    }
  });
});

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

