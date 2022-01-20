const express = require('express');
const initHandlebars = require('./config/express.js');

const app = express();

initHandlebars(app);

app.use('/static', express.static('./static'));

app.get('/', (req, res) => {

    res.render('index');
})



app.listen(3000, () => console.log('App. is running on http://localhost:3000'));