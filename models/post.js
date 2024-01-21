const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
});

const Post = mongoose.model('Post', PostSchema);

exports.Post =  Post ;