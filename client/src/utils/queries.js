import { gql } from '@apollo/client';

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;

// Query Company
export const GET_COMPANY = gql`
  query companies($id: ID) {
    company(_id: $id){
      name
      username
      email
      postsArr {
        _id
        shiftTime
        additionalInfo
        locationArr {
          _id
          address
          employees {
           _id
            firstName
            lastName
            username
            role
            email
            phone
            location
          }
        },
        role
        tags {
          _id
          title
        }
      }
    }
  }`
// Query Location
export const GET_LOCATIONS = gql`
query locations($companyId: ID!)
  locations(companyId: $companyId) {
    intersection
    address
    employees {
      _id
       firstName
       lastName
       username
       role
       email
       phone
     }
  }`
// Query Post
export const GET_POSTS = gql`
query posts($location: ID)
  posts(location: $location) {
    shiftTime
    additionalInfo
    location {
      address
      intersection
    }
    role
    tags
  }`

// Query Role
export const GET_ROLES = gql`
  query roles($companyId: ID!) {
    roles(companyId: $companyId) {
      _id
      title
    }
  }
`
// Query Tag
export const GET_TAGS = gql`
  query tags($companyId: ID!) {
    tags(companyId: $companyId) {
      _id
      title
    }
  }
`
// Query User
export const GET_USERS = gql`
  query users($companyId: ID!) {
    users(companyId: $companyId) {
      _id
      firstName
      lastName
      username
      password
      role {
        _id
        title
      }
      location {
        _id
        intersection
        address
      }
      email
      phone
    }
  }
`