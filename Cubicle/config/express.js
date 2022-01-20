const express = require('express');
const hbs  = require('express-handlebars');
const path = require('path');


const initHandlebars = (app) => {
    
    app.engine('hbs', hbs.engine({
        extname: 'hbs'
    }));

    app.set('view engine', 'hbs');
}

module.exports = initHandlebars;