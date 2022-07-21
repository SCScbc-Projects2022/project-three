const { Schema, model } = require('mongoose');
const locationSchema = require('./Location');
const tagSchema = require('./Tag');

// role, start and end time, additional information, under which manager, location
// Tag: string

const postSchema = new Schema(
    {
      role: {
        type: String,
        required: true
      },
      shiftTime: {
        type: Object,
        required: true
      },
      // location: [locationSchema],
      additionalInfo: {
        type: String
      },
      // tagId: [tagSchema]
    },
    {
      toJSON: {
        virtuals: true,
      },
    }
  );

  const Post = model('Post', postSchema);

  module.exports = Post;