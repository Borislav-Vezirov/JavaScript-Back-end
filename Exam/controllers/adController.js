const mapErrors = require('../utils/mappers.js');
const { isUser } = require('../middlewares/guards.js');
const { createAd, getOneById, getOneAndUpdate, deletePost, apply, search, getAllAds } = require('../services/adServices.js');

const router = require('express').Router();



router.get('/create', isUser(), (req, res) => {
    
    res.render('create', { title: 'Create Ad' })
});

router.post('/create', isUser(), async (req, res) => {
    
    const userId = req.session.user._id;
    
    const post = {
        headline    : req.body.headline,
        location    : req.body.location,
        name        : req.body.name,
        description : req.body.description,
        author      : userId
    };

    try {
        
        await createAd(post, req.session.user.email);

        res.redirect('/catalog');

    } catch (error) {
        
        const errors = mapErrors(error);
        res.render('create', { title: 'Create Page', errors , data: post});

    }
});

router.get('/edit/:id', isUser(), async (req, res) => {
    
    const id = req.params.id;

    const post = await getOneById(id);

    if(req.session.user._id != post.author._id){

        return res.redirect('/login');
    };
 

    res.render('edit', { title: 'Edit Page', post })
});

router.post('/edit/:id', isUser(), async (req, res) => {
    
    const id = req.params.id;

    const existing = await getOneById(id);

    if(req.session.user._id != existing.author._id){

        return res.redirect('/login');
    };

    try {
        const post = await getOneAndUpdate(id, req.body);
        res.redirect('/details/' + id);
        
    } catch (error) {
        const errors = mapErrors(error);
        res.render('edit', { title: 'Edit Page', errors});
        
    }
});

router.get('/apply/:id', isUser(), async (req, res) => {
    
    const id  = req.params.id;

    try {
        
        await apply(id, req.session.user._id);

        res.redirect('/details/' + id);

    } catch (error) {

        const errors = mapErrors(error);
        res.render('details', { errors });

    };
});

router.get('/search', async (req, res) => {
    
     
    const getAll = await search();

    const ads = [];

    getAll.map(x => {

        if(x.author.email == req.query.text){
            ads.push(x);
        };
    });
    
    res.render('search', { ads })
 });


router.get('/delete/:id', isUser(), async (req, res) => {

    const id = req.params.id;

    const existing = await getOneById(id);

    if(req.session.user._id != existing.author._id){

        return res.redirect('/login');
    };
   
    try {
        
        await deletePost(id);

        res.redirect('/catalog');

    } catch (error) {
        const errors = mapErrors(error);
        res.render('details', { errors });
    }
});




module.exports = router;