const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/cubes';

async function initDB() {

    try {
        await mongoose.connect(connectionString);
        console.log('DB Connected');
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = initDB;