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
// Query Location
// Query Post

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