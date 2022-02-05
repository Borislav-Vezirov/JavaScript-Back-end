const User = require('../models/User.js');
const bcrypt = require('bcrypt');

async function register(username, password) {

    const hashedPassword = await bcrypt.hash(password, 10);

    return User.create({ username, password: hashedPassword });
} 


const authService = {
    register
}


module.exports = authService;