const { getAllAds, getOneById, getTop3Ads } = require('../services/adServices.js');

const router = require('express').Router();

router.get('/', async (req, res) => {

    let ads = await getTop3Ads();

    if(ads.length > 0){
        ads = ads.map(x => {
            x.numberOfUsers = x.appliedUsers.length;
            return x
        });
    }

    res.render('home', { ads });
});

router.get('/catalog', async (req, res) => {

    const posts = await getAllAds();

    res.render('catalog', { title: 'Catalog Page' , posts});
});

router.get('/details/:id', async (req, res) => {

    const id = req.params.id;

    const post = await getOneById(id);

    const numberOfApplyedUser = post.appliedUsers.length

    if(req.session.user){

        post.hasUser = true;

        if(req.session.user._id == post.author._id){

            post.isAuthor = true;
        }else{

            post.isApply = post.appliedUsers.find(x => x._id == req.session.user._id) != undefined;

        };
    };

    res.render('details', { title: 'Details Page', post, numberOfApplyedUser });
});

module.exports = router;