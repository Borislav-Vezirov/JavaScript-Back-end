const { urlencoded } = require('express');
const express = require('express');
const initHandlebars = require('./config/express.js');
const routes = require('./config/routes.js');

const app = express();

initHandlebars(app);
app.use(express.urlencoded({extended: true}));
app.use('/static', express.static('./static'));
app.use(routes);

app.listen(3000, () => console.log('Application is running on http://localhost:3000'));