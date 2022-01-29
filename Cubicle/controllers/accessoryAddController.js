const router = require('express').Router({ mergeParams: true });
const cubeService = require('../services/cubeService.js');
const accessoryService = require('../services/accessoryService.js');

router.get('/add', async (req, res) => {

    const cube = await cubeService.getCubeById(req.params.cubeId);

    const accessories = await accessoryService.getAllAccessories();

    res.render('attachAccessory', { ...cube, accessories });
})

module.exports = router;