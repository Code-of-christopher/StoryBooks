const mongoose = require('mongoose');

const UserSchema  = new mongoose.Schema({
    googleId: {
        type: String,
        required: true
    },
    displayname: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('user', UserSchema)