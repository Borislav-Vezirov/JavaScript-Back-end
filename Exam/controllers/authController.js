const { register, login } = require('../services/userServices.js');
const mapErrors = require('../utils/mappers.js');
const { isUser, isGuest } = require('../middlewares/guards.js');

const router = require('express').Router();


router.get('/register', isGuest(), (req, res) => {
    
    res.render('register');
});

router.post('/register', isGuest(), async (req, res) => {
   
    try {

        if(req.body.password == ''){
            throw new Error('Password is required!');
        }else if(req.body.password.length < 5){
            throw new Error('Password must be more than 4 characters')
        }else if(req.body.password != req.body.rePass){
            throw new Error('Password\'s must be equals');
        };

        const user = await register(req.body.email, req.body.password, req.body.description);

        req.session.user = user;

        res.redirect('/');
        
    } catch (error) {
        
        const errors = mapErrors(error);

        res.render('register', { data: { email: req.body.email, description: req.body.description }, errors});
    }
   
   

});

router.get('/login', isGuest(), (req, res) => {
    
    res.render('login');
});

router.post('/login', isGuest(), async (req, res) => {
    
    try {
        const user = await login(req.body.email, req.body.password);

        req.session.user = user;

        res.redirect('/');

    } catch (error) {
        
        const errors = mapErrors(error);
        
        res.render('login', { data: { email: req.body.email }, errors });
    }
});

router.get('/logout', isUser(), (req, res) => {
    
    delete req.session.user;
    res.redirect('/');
});

module.exports = router;