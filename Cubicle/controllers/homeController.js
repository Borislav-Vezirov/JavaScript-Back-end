const express = require('express');
const router  = express.Router();
const cubeService = require('../services/cubeService.js');


const homePage = (req, res) => {
    
    let cubes = cubeService.getAll();

    res.render('index', {
        cubes
    });
}

const aboutPage = (req, res) => {

    res.render('about');
}

const searchBar = (req, res) => {

    const { search, from, to } = req.query;

    const cubes = cubeService.searchLogic(search, from, to);

    res.render('index', { 
        cubes,
        title: 'SEARCH',
        search,
        from,
        to
    });
}

router.get('/', homePage);
router.get('/about', aboutPage);
router.get('/search', searchBar);

module.exports = router;