const router = require('express').Router();

const cubeController  = require('../controllers/cubeController.js');
const homeController  = require('../controllers/homeController.js');

router.use(homeController);
router.use(cubeController);

module.exports = router;