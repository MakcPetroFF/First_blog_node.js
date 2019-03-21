const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    titile: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: SDate,
        default: Date.now
    }

});

module.exports = mongoose.model('posts', postSchema);