const Accessory = require('../models/Accessorie.js');

async function create(name, description, imageUrl){

    return await Accessory.create({ name, description, imageUrl });
}

async function getAllAccessories(){

    return await Accessory.find({}).lean();
}

async function getRemaining(accessoriesIds){

    return await Accessory.find({
        id: {
            $nin: accessoriesIds
        }
    }).lean();
}

const accessoryService = {

    create,
    getAllAccessories,
    getRemaining
};

module.exports = accessoryService;