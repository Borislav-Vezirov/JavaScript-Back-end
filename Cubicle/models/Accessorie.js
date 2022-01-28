const mongoose = require('mongoose');

const accesorySchema = new mongoose.Schema({

    name: { type: String, required: true },
    imageUrl: { type: String, required: true, validate: [ /^https?:\/\//i, 'Invalid image Url' ] },
    description: { type: String, required: true, maxlength: 50 }

});

const Accessory = mongoose.model('Accessorie', accesorySchema);

module.exports = Accessory;