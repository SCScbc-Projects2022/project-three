const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const postSchema = require('./Post');
const userSchema = require('./User');
const locationSchema = require('./Location');

const companySchema = new Schema(
  {
    company: {
        type: String,
        unique: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    postsArr: [postSchema],
    userArr: [userSchema],
    locationArr: [locationSchema]
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// password hashing
companySchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// custom method to compare and validate password for logging in
companySchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Company = model('Company', companySchema);

module.exports = Company;
