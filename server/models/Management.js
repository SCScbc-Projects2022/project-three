// Only Admin level users can view the data found in this model
const { Schema, model } = require('mongoose');

const postSchema = require('./Post');
const userSchema = require('./User');

const managementSchema = new Schema(
  {
    postsArr: [postSchema],
    userArr: [userSchema],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Management = model('Management', managementSchema);

module.exports = Management;
