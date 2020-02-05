const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');


// App Setup
const app = express();

// Middleware
const exphbs  = require('express-handlebars');

// set db
require('./data/reddit-db');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

require('./controllers/posts.js')(app);

// Routes
app.get('/', (req, res) => {
    res.render("home", {});
});

app.get('/posts/new', (req, res) => {
res.render("posts-new")
});

var port = process.env.PORT || 3000; app.listen(port, function() { console.log("Listening on " + port); });