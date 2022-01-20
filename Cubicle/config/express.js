const express = require('express');
const hbs  = require('express-handlebars');



const initHandlebars = (app) => {
    
    app.engine('hbs', hbs.engine({
        extname: 'hbs'
    }));

    app.set('view engine', 'hbs');

}

module.exports = initHandlebars;