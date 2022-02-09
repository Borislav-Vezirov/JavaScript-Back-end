const jwt = require('jsonwebtoken');
const { SECRET } = require('../constants.js'); 


function jwtSign(payload, secret){

    let promise = new Promise((resolve, reject) => {

        jwt.sign(payload, secret, function(err, token){
            if(err){
                reject(err);
            }else{
                resolve(token);
            }
        })
    })
    return promise;
}

async function createToken(user){

    const payload = {
        id: user._id,
        username: user.username
    };
    
    return await jwtSign(payload, SECRET)
}

module.exports = {
    jwtSign,
    createToken
};