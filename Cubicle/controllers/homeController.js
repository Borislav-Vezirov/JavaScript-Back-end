const router  = require('express').Router();
const cubeService = require('../services/cubeService.js');


const homePage = async (req, res) => {
    
    let cubes = await cubeService.getAll();

    res.render('index', { cubes });
}

const aboutPage = (req, res) => {

    res.render('about');
}

const searchBar = async (req, res) => {

    const { search, from, to } = req.query;

    const cubes = await cubeService.searchLogic(search, from, to);

    res.render('index', { 
        cubes,
        title: 'SEARCH',
        search,
        from,
        to
    });
}

router.get('/', homePage);
router.get('/about', aboutPage);
router.get('/search', searchBar);

router.get('/login', (req, res) => {
    
    res.render('auth/login');
});

router.post('/login', (req, res) => {
    

    res.redirect('/');
});

router.get('/register', (req, res) => {
    
    res.render('auth/register');
});

module.exports = router;