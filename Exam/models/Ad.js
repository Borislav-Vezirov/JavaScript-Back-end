const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    headline: {type: String, required: true, minlength: [4, 'Headline must be at least 4 characters']},
    location: {type: String, required: true, minlength: [8, 'Location must be at least 8 characters']},
    name: {type: String, required: true, minlength: [3, 'Company name must be at least 3 characters']},
    description:{type: String, required: true, maxlength: [40, 'Description should be a maximum of 40 characters long']},
    author: {type: mongoose.Types.ObjectId, ref: 'User'},
    appliedUsers: [{type: mongoose.Types.ObjectId, ref: 'User'}]
},
{
    timestamps: true
}
);



const Ad = mongoose.model('Ad', userSchema);

module.exports = Ad;