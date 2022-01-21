const express = require('express');
const router  = express.Router();
const cubeService = require('../services/cubeService.js');

const createPage = (req, res) => {

    let cubes = cubeService.getAll();
    console.log(cubes);
    res.render('create');
}

const createCube = (req, res) => {
    
    let {name, description, imageUrl, difficulty} = req.body;

    cubeService.create(name, description, imageUrl, difficulty);

    res.redirect('/create');
}

router.get('/create', createPage);
router.post('/create', createCube);

module.exports = router;