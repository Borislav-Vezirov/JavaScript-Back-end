const router  = require('express').Router();
const authService = require('../services/authService.js');
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

router.post('/login', async (req, res) => {
    
    const { username, password } = req.body;

    const user = await authService.login(username, password);
    try {
        if(user){
            res.redirect('/');
        }
    } catch (error) {
        console.log(error.message);
    }

});

router.get('/register', (req, res) => {
    
    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    
    const { username, password, repeatPassword } = req.body;

    await authService.register(username, password);

    res.redirect('/login');
});



module.exports = router;