const express = require('express');

// App Setup
const app = express();

// Middleware
const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

console.log("hello world");

// Routes
app.get('/', (req, res) => {
    res.render("home", {});

});

  var port = process.env.PORT || 3000; app.listen(port, function() { console.log("Listening on " + port); });