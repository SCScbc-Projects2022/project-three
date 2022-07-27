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

    posts: async (parent) => {
      return Post.find();
    },
    post: async (parent, { _id }) => {
      return Post.findOne({ _id });
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
      return User.find({ companyId });
    },
    user: async (parent, { _id }) => {
      return User.findOne({ _id }).populate('companyId');
    },
  },

  //login, addEmployee, addCompany, addPost, addRole, addTag, addLocation
  Mutation: {
    login: async (parent, { email, password }) => {
      const companyLogin = await Company.findOne({ email });

      if (!companyLogin) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await companyLogin.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(companyLogin);
      return { token, companyLogin };
    },

    addCompany: async (parent, args) => {
      const company = await Company.create(args);
      const token = signToken(company);

      return { token, company };
    },

    addEmployee: async (parent, { employeeToSave, companyId }) => {
      const updateUserArr = await Company.findOneAndUpdate(
        { _id: companyId },
        { $addToSet: { userArr: employeeToSave } },
        { new: true }
      ).populate('userArr');

      return { updateUserArr };

      // const employee = await User.create(args);
      // const token = signToken(employee);

      // return { token, employee };
    },

    addPost: async (parent, args) => {
      const post = await Post.create(args);
      const token = signToken(post);

      return { token, post };
    },

    addRole: async (parent, args) => {
      const role = await Role.create(args);
      // const token = signToken(role);

      return role;
    },

    addTag: async (parent, args) => {
      const tag = await Tag.create(args);
      // const token = signToken(tag);

      return tag;
    },

    addLocation: async (parent, args) => {
      const location = await Location.create(args);
      // const token = signToken(tag);

      return { location };
    },
  },
};

module.exports = resolvers;
