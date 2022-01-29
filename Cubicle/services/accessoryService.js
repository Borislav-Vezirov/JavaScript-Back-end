const Accessory = require('../models/Accessorie.js');

async function create(name, description, imageUrl){

    return await Accessory.create({ name, description, imageUrl });
}

async function getAllAccessories(){

    return await Accessory.find({}).lean();
}

const accessoryService = {

    create,
    getAllAccessories
};

module.exports = accessoryService;