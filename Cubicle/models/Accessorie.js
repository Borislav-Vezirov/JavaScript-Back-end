const mongoose = require('mongoose');

const accesorieSchema = new mongoose.Schema({

    name: { type: String, required: true },
    imageUrl: { type: String, required: true, validate: [ /^https?:\/\//i, 'Invalid image Url' ] },
    description: { name: String, required: true, maxlength: 50 },
    // cubes: {  }

});

const Accessorie = mongoose.model('Accessorie', accesorieSchema);

module.exports = Accessorie;