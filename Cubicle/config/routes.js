const router = require('express').Router();

const cubeController  = require('../controllers/cubeController.js');
const homeController  = require('../controllers/homeController.js');
const accessoriesController = require('../controllers/accessoryCreateController.js');

router.use(homeController);
router.use(cubeController);
router.use('/accessories', accessoriesController);

router.use('*', (req, res) => {

    res.render('404');
});

module.exports = router;