const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

//add image section

const itemSchema = new Schema({
    itemText: {
        type: String,
        minlength: 1,
        maxlength: 280,
        trim: true,
    },
    itemAuthor: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    responses: [
        {
          responseText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
          },
          responseAuthor: {
            type: String,
            required: true,
          },
          createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
          },
        },
      ],
})

const Item = model('Item', itemSchema);

module.exports = Item;