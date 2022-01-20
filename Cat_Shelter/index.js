const http = require('http');
const fs   = require('fs');
const express = require('express');
const hbs = require('express-handlebars');


const app = express();
app.engine('hbs', hbs.engine({ extname: 'hbs' }));

app.set('view engine', 'hbs');

app.use('/static', express.static('./static'));
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.render('home/home');
})

app.get('/cats/add-breed', (req, res) => {

    res.render('addBreed')
});

app.get('/cats/add-cat/:catName?', (req, res) => {

    const catBreed = [
        {breed: 'Persian'},
        {breed: 'Angore'},
        {breed: 'Siam'}
    ];

    res.render('addCat', {
        name: req.params.catName,
        catBreed
    });
});



app.listen(3000, () => console.log('Server is starting on port http://localhost:3000'));