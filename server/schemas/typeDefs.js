const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    me: User
    companies: [Company]
    company(_id: ID!): Company
    users(companyId: ID!): [User]
    user(_id: ID!): User      // seperate query needed? - search by id or username?
    locations(companyId: ID!): [Location]
    location(_id: ID!): Location     // seperate query needed?
    posts(location: ID!): [Post]
    post(_id: ID!): Post            // seperate query needed?
    roles(companyId: ID!): [Role]
    role(_id: ID!): Role            // seperate query needed?
    tags(companyId: ID!): [Tag]
    tag(_id: ID!): Tag               // seperate query needed?
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
