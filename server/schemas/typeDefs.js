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
    rolesArr: [Role]
    locationArr: [Location]
  }

  type Location {
    _id: ID
    intersection: String
    address: Address
    companyId: ID!
  }

  input locationInput {
    _id: ID
    intersection: String
    address: addressInput
    companyId: String
  }

  type Address {
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
    locationArr: [Location]
    role: Role
    tags: [Tag]
  }

  input postInput {
    _id: ID
    shiftTime: shiftTimeInput
    additionalInfo: String
    location: locationInput
    role: String
    tags: String
    companyId: String
  }

  type ShiftTime {
    hour: String
    date: String
  }

  input shiftTimeInput {
    hour: String
    date: String
  }

  type Tag {
    _id: ID
    title: String
  }

  type Role {
    _id: ID
    title: String
  }

  input tagInput {
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
    addEmployee(employeeToSave: userInput): User
    removeEmployee(Id: String!, companyId: String!): User
    addCompany(
      name: String!
      username: String!
      password: String!
      address: String!
      address2: String
      city: String!
      province: String!
      postalCode: String!
      email: String!
      postsArr: postInput
      userArr: userInput
      locationArr: locationInput
      rolesArr: roleInput
    ): Auth
    addPost(postToSave: postInput): Post
    removePost(Id: String!, companyId: String!): Post
    addRole(roleToSave: roleInput): Role
    removeRole(Id: String!, companyId: String!): Role
    addTag(companyId: ID!, title: String!): Tag
    addLocation(locationToSave: locationInput): Location
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    location: String
    password: String
    email: String
    phone: Int
    role: Role
  }

  input userInput {
    _id: ID
    firstName: String
    lastName: String
    username: String
    location: String
    password: String
    email: String
    companyId: String
    phone: Int
    role: String
  }

  type Auth {
    token: ID!
    company: Company
    user: User
  }
`;

module.exports = typeDefs;
