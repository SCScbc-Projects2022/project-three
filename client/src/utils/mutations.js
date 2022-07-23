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
    $phone: Int!
    $role: String!
  ) {
    addEmployee(
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

export const ADD_COMPANY = gql`
  mutation addCompany($name: String!, $username: String!, email: String!, password: String!, postsArr: [String], userArr: [String], locationArr: [String] ) {
    addCompany(
      name: $name, 
      username: $username
      email: $email
      postsArr: $postsArr
      userArr: $userArr
      locationArr: $locationArr
      ) {
      token
      company {
        _id
        name
        username
        email
        postsArr {
          shiftTime
          additionalInfo
          location
          role
          tags
        }
        userArr {
          firstName
          lastName
          username
          location
          email
          phone
          role
        }
        locationArr {
          intersection
          address
          companyId
          employees
        }
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($shiftTime: [String!], $additionalInfo: String, location: [String!], role: String!, tags: String) {
    addPost(
      shiftTime: $shiftTime, 
      additionalInfo: $additionalInfo
      location: $location
      role: $role
      tags: $tags
      ) {
      token
      post {
        _id
        shiftTime
        additionalInfo
        location {
          intersection,
          address,
          companyId,
          employees
        }
        role
        tags
      }
    }
  }
`;

export const ADD_ROLE = gql`
  mutation addRole($title: String!) {
    addRole(title: $title) {
      token
      role {
        _id
        title
      }
    }
  }
`;
// ADD_ROLE
// ADD_TAG
// ADD_LOCATION
