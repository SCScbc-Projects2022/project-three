const { gql } = require('apollo-server-express');
//Candice doing user, tag and role
const typeDefs = gql`
  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addEmployee(username: String!, email: String!, password: String!): Auth
    addCompany(name: String!, username: String!, password: String!, postsArr: Object, userArr: Object, locationArr: Object): Auth
    addPost(shiftTime: Object!, additionalInfo: String, location: Object, role: Object, tags: Object): Auth
    addRole(companyId: Object, title: String!): Auth
    addTag(companyId: Object, title: String!): Auth
    addLocation(intersection: String, address: Object!, companyId: Object, employees: Object): Auth
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
