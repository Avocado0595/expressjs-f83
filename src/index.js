const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');
const app = express();
const port = 8080;

//static file
app.use(express.static(path.join(__dirname,'public')));
//view engine
app.engine('.hbs', exphbs({extname:'.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, "resources/views"));

//morgan
app.use(morgan('combined'));

//route
app.get('/', (req, res) => {
  res.render('home');
})
app.get('/about', (req, res) => {
  res.render('about');
})

//open port 8080
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})