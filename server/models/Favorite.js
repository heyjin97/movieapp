const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = mongoose.Schema({
    userFrom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    movieId: {
        type: String,
    },
    movieTitle: {
        type: String
    },
    moviePost: {
        type: String
    },
    movieRunTime: {
        type: String
    }
}, { timestamp: true })

const Favorite = mongoose.model('Favorite', userSchema);

module.exports = { Favorite }


