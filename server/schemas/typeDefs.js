const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Company {
    _id: ID
    name: String
    username: String
    email: String
    password: String
    postsArr: [Post]
    userArr: [User]
    locationArr: [Location]
  }

  type Location {
    _id: ID
    intersection: String
    address: Address
    companyId: [Company]
    employees: [User]
  }

  type Address {
    locationName: String
    number: Int
    street: String
    city: String
    country: String
    postalCode: String
  }

  type Post {
    _id: ID
    shiftTime: ShiftTime
    additionalInfo: String
    location: [Location]
    role: [Role]
    tags: [Tag]
  }

  type ShiftTime {
    hour: String
    date: String
  }

  type Tag {
    title: String
  }

  type Role {
    title: String
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
    firstName: String
    lastName: String
    username: String
    email: String
    phone: String
    role: Role
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
