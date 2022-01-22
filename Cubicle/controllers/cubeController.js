const express = require('express');
const router  = express.Router();
const cubeService = require('../services/cubeService.js');

const createPage = (req, res) => {

    cubeService.getAll();
    res.render('create');
}

const createCube = (req, res) => {
    
    let {name, description, imageUrl, difficulty} = req.body;

    cubeService.create(name, description, imageUrl, difficulty);

    res.redirect('/');
}

const cubeDetails = (req, res) => {

    const cube = cubeService.getCubeById(req.params.cubeId);

    res.render('details', { ...cube });
}

router.get('/create', createPage);
router.post('/create', createCube);
router.get('/:cubeId', cubeDetails);

module.exports = router;