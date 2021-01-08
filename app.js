const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Partials
const hbs = require('hbs');
const partialsPath = path.join(__dirname, '/views/partials');
hbs.registerPartials(partialsPath);
/////

// Static files 
app.use(express.static('public'));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/img', express.static(path.join(__dirname, 'public/img')));
app.use('/javascript', express.static(path.join(__dirname, 'public/javascript')));

// Templating
app.set('views', './views');
app.set('view engine', 'hbs');

// Routes
app.use('/', require('./routes/homePage'));
app.use('/find', require('./routes/find'));
app.use('/post', require('./routes/post'));
app.use('/update', require('./routes/update'));
app.use('/delete', require('./routes/delete'));


const PORT = 5007
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));