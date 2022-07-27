import { gql } from '@apollo/client';

// Company and User Model would both require the same parameters for logging in
export const LOGIN_ADMIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      company {
        _id
        email
        username
      }
    }
  }
`;

export const ADD_EMPLOYEE = gql`
  mutation addEmployee($employeeToSave: userInput) {
    addEmployee(employeeToSave: $employeeToSave) {
      firstName
      lastName
    }
  }
`;

export const ADD_COMPANY = gql`
  mutation addCompany(
    $name: String!
    $username: String!
    $email: String!
    $address: String!
    $address2: String
    $city: String!
    $province: String!
    $postalCode: String!
    $password: String!
    $postsArr: postInput
    $userArr: userInput
    $locationArr: locationInput
  ) {
    addCompany(
      name: $name
      username: $username
      email: $email
      address: $address
      address2: $address2
      city: $city
      province: $province
      postalCode: $postalCode
      password: $password
      postsArr: $postsArr
      userArr: $userArr
      locationArr: $locationArr
    ) {
      token
      company {
        _id
        email
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($postToSave: postInput) {
    addPost(postToSave: $postToSave) {
      _id
      shiftTime {
        date
      }
    }
  }
`;

export const ADD_ROLE = gql`
  mutation addRole($title: String!, $companyId: ID!) {
    addRole(title: $title, companyId: $companyId) {
      _id
      companyId {
        _id
      }
      title
    }
  }
`;

export const ADD_TAG = gql`
  mutation addTag($title: String!, $companyId: ID!) {
    addTag(title: $title, companyId: $companyId) {
      _id
      title
      companyId {
        _id
      }
    }
  }
`;

// Need to update the info that address returns (for now leave it as is)
export const ADD_LOCATION = gql`
  mutation addLocation(
    $intersection: String!
    $address: addressInput!
    $companyId: ID!
    $employees: userInput
  ) {
    addLocation(
      intersection: $intersection
      address: $address
      companyId: $companyId
      employees: $employees
    ) {
      _id
      intersection
      address {
        street
        city
      }
      employees {
        firstName
        lastName
        username
        location
        email
        phone
        role {
          title
          companyId
        }
      }
    }
  }
`;
