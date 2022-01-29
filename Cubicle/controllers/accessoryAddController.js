const router = require('express').Router({ mergeParams: true });
const cubeService = require('../services/cubeService.js');

router.get('/add', async (req, res) => {

    const cube = await cubeService.getCubeById(req.params.cubeId);

    res.render('attachAccessory', { ...cube });
})

module.exports = router;