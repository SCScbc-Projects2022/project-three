const { Schema, model } = require('mongoose');
const locationSchema = require('./Location');
const tagSchema = require('./Tag');

// role, start and end time, additional information, under which manager, location
// Tag: string

const postSchema = new Schema(
<<<<<<< HEAD
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
=======
  {
    role: {
      type: String,
      required: true,
>>>>>>> develop
    },
    shiftTime: {
      type: Object,
      required: true,
    },
    additionalInfo: {
      type: String,
    },
    locationArr: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Location',
      },
    ],
    tagId: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Tag',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Post = model('Post', postSchema);

module.exports = Post;
