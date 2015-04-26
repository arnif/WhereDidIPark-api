var mongoose   = require('mongoose'),
 	Entity = require('./models/entity'),
    express = require('express'),
    cors = require('cors');

mongoose.connect('mongodb://localhost/wheredidipark'); // connect to our database

var app = express();
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(cors());

require('./lib/routes')(app);

var port = process.env.PORT || 8085;

app.listen(port);
console.log('API live on ', port);

exports = module.exports = app;
    
