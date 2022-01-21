const express = require('express');
const router  = express.Router();
const cubeService = require('../services/cubeService.js');


const homePage = (req, res) => {
    
    let cubes = cubeService.getAll();

    res.render('index', {
        cubes
    });
}

router.get('/', homePage);

module.exports = router;