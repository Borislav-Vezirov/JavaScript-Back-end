const router = require('express').Router({ mergeParams: true });
const cubeService = require('../services/cubeService.js');
const accessoryService = require('../services/accessoryService.js');

router.get('/add', async (req, res) => {

    const cube = await cubeService.getCubeById(req.params.cubeId);

    const accessories = await accessoryService.getRemaining(cube.accessories.map(x => x._id));

    res.render('attachAccessory', { ...cube, accessories });
})

router.post('/add', async (req, res) => {

    await cubeService.attachAccessory(req.params.cubeId, req.body.accessory);

    res.redirect(`/${req.params.cubeId}`);
})

module.exports = router;