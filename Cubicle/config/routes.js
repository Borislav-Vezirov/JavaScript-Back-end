const router = require('express').Router();

const cubeController  = require('../controllers/cubeController.js');
const homeController  = require('../controllers/homeController.js');
const accessoriesController = require('../controllers/accessoryCreateController.js');
const authController = require('../controllers/authController.js');

router.use(homeController);
router.use(cubeController);
router.use('/accessories', accessoriesController);
router.use('/auth', authController);
router.use('*', (req, res) => {

    res.status(404).render('404');
});

module.exports = router;