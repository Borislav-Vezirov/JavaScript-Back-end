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

router.get('/', homePage);
router.get('/about', aboutPage);

module.exports = router;