const mongoose  = require('mongoose');
const Accessory = require('./Accessorie.js');

const cubeSchema = new mongoose.Schema({

    name:        { type: String, required: true },
    description: { type: String, required: true, maxlength: 100 },
    imageUrl:    { type: String, required: true, validate: [ /^https?:\/\//i, 'Invalid image Url' ]},
    difficulty:  { type: Number, required: true, min: 1, max: 5 },
    accessories: [
        {
            type: mongoose.Types.ObjectId,
            ref : "Accessorie"
        }
    ]
    
});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;