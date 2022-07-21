const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const locationSchema = require('./Location');

const userSchema = new Schema(
  {
    first: {
      type: String,
      required: true,
      trim: true
    },
    last: {
      type: String,
      required: true,
      trim: true
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
<<<<<<< HEAD
    role: { // don't let this be free type ?
      type:  String,
      required: true
    },
    // location: [locationSchema],
=======
    manager: {
      type: Boolean,
      default: false,
    },
    role: {
      // don't let this be free type ?
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
>>>>>>> develop
    email: {
      type: String,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    phone: {
      type: Number,
    },
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
