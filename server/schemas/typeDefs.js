const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    me: User
    users:
    user:
    companies:
    company:
    locations:
    location:
    posts:
    post:
    roles:
    role:
    tags:
    tag:
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
