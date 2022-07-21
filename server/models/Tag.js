const { Schema, model } = require('mongoose');

const tagSchema = new Schema(
    {
      name: {
        type: String,
        required: true
      }  
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

const Tag = new model('Tag', tagSchema);

module.exports = Tag;