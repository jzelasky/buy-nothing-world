const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

//add image section
//post author and comment author should be current logged in user

const postSchema = new Schema({
    postText: {
        type: String,
        minlength: 1,
        maxlength: 280,
        trim: true,
    },
    // postAuthor: {
    //     type: String,
    //     required: true,
    //     trim: true,
    // }
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    comments: [
        {
          commentText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
          },
          //commentAuthor: {
          //  type: String,
          //  required: true,
          //},
          createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
          },
        },
      ],
})

const Post = model('Post', postSchema);