const { User, Company, Location, Post, Role, Tag } = require('../models');
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
  },

  //login, addEmployee, addCompany, addPost, addRole, addTag, addLocation
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

    addCompany: async (parent, args) => {
      const company = await Company.create(args);
      const token = signToken(company);

      return { token, company };
    },

    addEmployee: async (parent, args) => {
      const employee = await User.create(args);
      const token = signToken(employee);

      return { token, employee };
    },

    addPost: async (parent, args) => {
     const post = await Post.create(args);
     const token = signToken(post);
     
     return {token, post };
    },

    addRole: async (parent, args) => {
      const role = await Role.create(args);
      const token = signToken(role);

      return { token, role };
    },

    addTag: async (parent, args) => {
      const tag = await Tag.create(args);
      const token = signToken(tag);

      return { token, tag };
    },

    addLocation: async (parent, args) => {
      const location = await Location.create(args);
      const token = signToken(tag);

      return { token, location };
    },
  },
};

module.exports = resolvers;
