const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {jwtSign, createToken} = require('../utils/authJwt.js');

async function register(username, password) {

    const hashedPassword = await bcrypt.hash(password, 10);

    return User.create({ username, password: hashedPassword });
} 

async function login(username, password){

    const user =  await User.findOne({username});
    const isValid = user ?  await bcrypt.compare(password, user.password) : undefined;
    
    try {
        if(isValid){
            return user;
        }else{
            throw new Error('Cannot find username or password');
        }
    } catch (error) {
       return undefined; 
    }
}

const authService = {
    register,
    login
}


module.exports = authService;