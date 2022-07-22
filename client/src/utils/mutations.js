import { gql } from '@apollo/client';

// Company and User Model would both require the same parameters for logging in
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_EMPLOYEE = gql`
  mutation addEmployee(
    $firstName: String!
    $lastName: String!
    $username: String!
    $password: String!
    $location: String!
    $email: String!
    $phone: Number!
    $role: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      username: $username
      password: $password
      location: $location
      email: $email
      phone: $phone
      role: $role
    ) {
      token
      user {
        _id
        firstName
        lastName
        username
        location
        email
        phone
        role
      }
    }
  }
`;

// LOGIN_COMPANY
// ADD_COMPANY
// ADD_POST

// ADD_ROLE
// ADD_TAG
// ADD_LOCATION
