const router = require('express').Router();


router.get('/create', (req, res) => {

    res.render('accessories/create');

});

router.post('/create', async (req, res) => {

    const accessorie = req.body;

    res.redirect('/');
})
module.exports = router;