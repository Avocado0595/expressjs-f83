const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();
const port = 8080;

//static file
app.use(express.static(path.join(__dirname,'public')));
//view engine
app.engine('.hbs', exphbs({extname:'.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, "resources/views"));
//helper in view engine
var hbs = exphbs.create({});
hbs.handlebars.registerHelper('index', function (a,b) {
  return a+b;
})
//overrride method

app.use(methodOverride('_method'));
//json
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


//morgan
app.use(morgan('combined'));

//route
const route = require('./routes/index');
route(app); //route init
//connect to database
const db = require('./config/db');
db.connect();
//open port 8080
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})