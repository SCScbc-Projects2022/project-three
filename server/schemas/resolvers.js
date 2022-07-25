const { Company, User, Location, Role, Post, Tag } = require('../models');

const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          '-__v -password'
        );
        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
    companies: async () => {
      return Company.find()
        .select('-__v -password')
        .populate('postsArr')
        .populate('userArr')
        .populate('locationArr');
    },
    company: async (parent, { _id }) => {
      return Company.findOne({ _id })
        .select('-__v -password')
        .populate('postsArr')
        .populate('userArr')
        .populate('locationArr');
    },
    locations: async (parent, { companyId }) => {
      return Location.find({ companyId })
        .populate('companyId')
        .populate('employees');
    },
    location: async (parent, { _id }) => {
      return Location.findOne({ _id })
        .populate('companyId')
        .populate('employees');
    },
    posts: async (parent, { location }) => {
      // the property is location, but it should be locationId
      return Post.find({ location })
        .populate('companyId')
        .populate('employees');
    },
    post: async (parent, { _id }) => {
      return Post.findOne({ _id }).populate('companyId').populate('employees');
    },
    roles: async (parent, { companyId }) => {
      return Role.find({ companyId }).populate('companyId');
    },
    role: async (parent, { _id }) => {
      return Role.findOne({ _id }).populate('companyId');
    },
    tags: async (parent, { companyId }) => {
      return Tag.find({ companyId }).populate('companyId');
    },
    tag: async (parent, { _id }) => {
      return Tag.findOne({ _id }).populate('companyId');
    },
    allUsers: (async) => {
      return User.find();
    },
    users: async (parent, { companyId }) => {
      return User.find({ companyId }).populate('companyId');
    },
    user: async (parent, { _id }) => {
      return User.findOne({ _id }).populate('companyId');
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },

    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    addEmployee: async (parent, args) => {
      const user = await User.create(args);

      return { user };
    },
  },
};

module.exports = resolvers;
