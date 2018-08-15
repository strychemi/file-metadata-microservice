// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const errorHandlers = require('./handlers/errorHandlers');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// use body-parser to be able to parse POST reqeusts
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// organize all our routes via routes/index.js
app.use('/', routes);

// error handler via JSON
app.use(errorHandlers.errorResponse);

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
