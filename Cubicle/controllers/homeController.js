const express = require('express');
const router  = express.Router();

const homePage = (req, res) => {

    res.render('index');
}

router.get('/', homePage);

module.exports = router;