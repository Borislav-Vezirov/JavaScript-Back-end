const express = require('express');
const router  = express.Router();
const cubeService = require('../services/cubeService.js');

const createPage = (req, res) => {

    res.render('create');
}

const createCube = async (req, res) => {
    
    let { name, description, imageUrl, difficulty } = req.body;

    try {
        await cubeService.create(name, description, imageUrl, difficulty);
    } catch (error) {
        res.status(400).write(error.message).end();
    }

    res.redirect('/');
}

const cubeDetails = async (req, res) => {

    const cube = await cubeService.getCubeById(req.params.cubeId);

    res.render('details', { ...cube });
}

router.get('/create', createPage);
router.post('/create', createCube);
router.get('/:cubeId', cubeDetails);
router.get('/:cubeId/accessory/add', addAccessory);

module.exports = router;