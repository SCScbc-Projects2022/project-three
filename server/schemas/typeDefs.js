const { gql } = require('apollo-server-express');
//Candice doing user, tag and role
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
    companyId: ID!
    employees: [User]
  }

  input locationInput {
    _id: ID
    intersection: String
    address: addressInput
    companyId: ID!
    employeeIds: [ID]
  }

  type Address {
    locationName: String
    number: Int
    street: String
    city: String
    country: String
    postalCode: String
  }

  input addressInput {
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
    location: Location
    role: Role
    tags: [Tag]
  }

  input postInput {
    _id: ID
    shiftTime: [String!]
    additionalInfo: String
    location: [String]
    role: [String!]
    tags: [String!]
  }

  type ShiftTime {
    hour: String
    date: String
  }

  type Tag {
    _id: ID
    companyId: String
    title: String
  }

  input tagInput {
    title: String
  }

  type Role {
    _id: ID
    companyId: String
    title: String
  }

  input roleInput {
    companyId: String
    title: String
  }

  type Query {
    me: User
    companies: [Company]
    company(_id: ID!): Company
    allUsers: [User]
    users(companyId: ID!): [User]
    user(_id: ID!): User
    locations(companyId: ID!): [Location]
    location(_id: ID!): Location
    posts: [Post]
    post(_id: ID!): Post
    roles(companyId: ID!): [Role]
    role(_id: ID!): Role
    tags(companyId: ID!): [Tag]
    tag(_id: ID!): Tag
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addEmployee(
      firstName: String!
      lastName: String!
      username: String!
      password: String!
      location: String!
      email: String!
      phone: Int!
      role: String!
    ): User
    addCompany(
      name: String!
      username: String!
      password: String!
      postsArr: postInput
      userArr: userInput
      locationArr: locationInput
    ): Auth
    addPost(
      shiftTime: [String]!
      additionalInfo: String
      location: locationInput
      role: roleInput
      tags: tagInput
    ): Auth
    addRole(companyId: ID!, title: String!): Role
    addTag(companyId: ID!, title: String!): Tag
    addLocation(
      intersection: String
      address: addressInput!
      companyId: String!
      employees: userInput
    ): Auth
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    location: String
    email: String
    phone: String
    role: Role
  }

  input userInput {
    _id: ID
    firstName: String
    lastName: String
    username: String
    location: String
    email: String
    phone: String
    role: roleInput
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
