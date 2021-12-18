const express = require('express');
const hbs     = require('express-handlebars');
const { catalog }  = require('./controllers/catalog.js');
const { about }    = require('./controllers/about.js');
const { details }  = require('./controllers/details.js');
const { notFound } = require('./controllers/notFound.js');
const { create, post }  = require('./controllers/create.js');

const app = express();
const port = 3000;

app.engine('hbs', hbs({
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

app.use(express.static('static'));

app.get('/', catalog);
app.get('/about', about);
app.get('/create', create);
app.post('/create', post);
app.get('/details/:id', details);

app.all('*', notFound);

app.listen(port, () => console.log('Server listening on port ' + port));
