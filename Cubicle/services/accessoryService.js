const Accessory = require('../models/Accessorie.js');

async function create(name, description, imageUrl){

    return await Accessory.create({ name, description, imageUrl });
}

const accessoryService = {

    create
};

module.exports = accessoryService;