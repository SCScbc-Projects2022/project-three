import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        accountLevel
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
    $accountLevel: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
      accountLevel: $accountLevel
    ) {
      token
      user {
        _id
        username
        accountLevel
      }
    }
  }
`;
