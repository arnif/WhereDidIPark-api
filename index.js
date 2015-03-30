var mongoose   = require('mongoose'),
 	Entity = require('./models/entity'),
    express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/wheredidipark'); // connect to our database

var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(cors());

require('./lib/routes')(app);

var port = process.env.PORT || 8085;

app.listen(port);
console.log('API live on ', port);

exports = module.exports = app;
    