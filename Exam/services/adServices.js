const Ad = require("../models/Ad.js");
const User = require("../models/User.js");

const { getUserByEmail } = require("./userServices.js");


async function createAd(post, email){

    const createdPost = new Ad(post);

    const user = await getUserByEmail(email);

    user.myAds.push(createdPost._id);

    await user.save();

    await createdPost.save();

    return createdPost;
};

async function getAllAds(){

    return await Ad.find({}).lean();
};

async function getOneById(id){

    return await Ad.findById(id).populate('author', 'email').populate('appliedUsers', 'email description').lean();
};

async function getOneAndUpdate(id, post){

    return await Ad.findByIdAndUpdate(id, post);

};

async function apply(postId, userId){

    const post = await Ad.findById(postId);
    
    if(post.appliedUsers.includes(userId)){
        throw new Error('You already share!')
    };

    post.appliedUsers.push(userId);

    await post.save();
};

async function search(){

     const ads = Ad.find({}).populate('author','email').lean();

    return ads
};

async function getTop3Ads(){

    return await Ad.find().sort({createdAt: 1}).limit(3).lean(); 
};


async function deletePost(id){

    return await Ad.findOneAndDelete({_id: id});
};

module.exports = {
    createAd,
    getAllAds,
    getOneById,
    getOneAndUpdate,
    deletePost,
    apply,
    search,
    getTop3Ads
}