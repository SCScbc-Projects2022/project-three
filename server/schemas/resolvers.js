const { User } = require('../models');

const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
        .select('-__v -password');
        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
    companies: async () => {
      
    },
    company: async (parent, {_id}) => {

    },
    locations: async (parent, {companyId}) => {
      
    },
    location: async (parent, {_id}) => {

    },
    posts: async (parent, {location}) => { // the property is location, but it should be locationId
      
    },
    post: async (parent, {_id}) => {

    },
    roles: async (parent, {companyId}) => {
      
    },
    role: async (parent, {_id}) => {

    },
    tags: async (parent, {companyId}) => {
      
    },
    tag: async (parent, {_id}) => {

    },
    users: async (parent, {companyId}) => {
      
    },
    user: async (parent, {_id}) => {

    }
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
  },
};

module.exports = resolvers;
