const mongoose = require('mongoose');

const emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

const userSchema = new mongoose.Schema({
    email    : {type: String, required: [true, 'Email is required!'], validate: {
        validator(value){
            return emailPattern.test(value);
        },
        message: 'Email must be valid and must contains only english letters!'
    }},
    password : {type: String, minlength: [5, 'Password must be at least 5 characters'] },
    description: {type: String, required: true, maxlength: [40, 'Description should be a maximum of 40 characters long']},
    myAds: [{type: mongoose.Types.ObjectId, ref: 'Ad'}]
});

userSchema.index({ email: 1 }, {
    unique: true,
    collation: {
        locale   : 'en',
        strength : 2
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;