const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Company {
    _id: ID
    name: String
    username: String
    email: String
    password: String
    postArr: [Post]
    userArr: [User]
    locationArr: [Location]
  }

  type Location {
    intersection: String
    address: Object
    companyId: [Company]
    employees: [User]
  }

  type Post {
    shiftTime: Object
    additionalInfo: String
    location: [Location]
    role: [Role]
    tags: [Tag]
  }

  type Query {
    me: User
    companies: [Company]
    company(_id: ID!): Company
    users(companyId: ID!): [User]
    user(_id: ID!): User
    locations(companyId: ID!): [Location]
    location(_id: ID!): Location
    posts(location: ID!): [Post]
    post(_id: ID!): Post
    roles(companyId: ID!): [Role]
    role(_id: ID!): Role
    tags(companyId: ID!): [Tag]
    tag(_id: ID!): Tag
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }

  type User {
    _id: ID
    username: String
    email: String
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
