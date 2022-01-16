const { catalog }  = require('../controllers/catalog.js');
const { about }    = require('../controllers/about.js');
const { details }  = require('../controllers/details.js');
const { notFound } = require('../controllers/notFound.js');
const { create, post }  = require('../controllers/create.js');

module.exports = (app) => {

    app.get('/', catalog);
    app.get('/about', about);
    app.get('/create', create);
    app.post('/create', post);
    app.get('/details/:id', details);

    app.all('*', notFound);
};