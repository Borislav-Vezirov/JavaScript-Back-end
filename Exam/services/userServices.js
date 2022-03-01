const User = require('../models/User.js');
const { hash, compare } = require('bcrypt');

async function register( email, password, description ){

    const existing = await getUserByEmail(email);

    if(existing){
        throw new Error('Email is taken');
    };

    const hashedPassword = await hash(password, 10);

    const user = new User({
        email,
        password: hashedPassword,
        description
    });

    await user.save();

    return user;
};

async function login(email, password){

    const user = await getUserByEmail(email);

    if(!user){
        throw new Error('Email or password are invalid')
    };

    const hasMatch = await compare(password, user.password);

    if(!hasMatch){
        throw new Error('Email or password are invalid')
    };

    return user;
};

async function getUserByEmail(email){

    return await User.findOne({ email: new RegExp(`^${email}$`, 'i')});
};

module.exports = {
    register,
    login,
    getUserByEmail
}