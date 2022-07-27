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
      _id
    }
  }
`;

export const REMOVE_EMPLOYEE = gql`
  mutation removeEmployee($Id: String!, $companyId: String!) {
    removeEmployee(Id: $Id, companyId: $companyId) {
      username
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

export const REMOVE_POST = gql`
  mutation removePost($Id: String!, $companyId: String!) {
    removePost(Id: $Id, companyId: $companyId) {
      additionalInfo
    }
  }
`;

export const ADD_ROLE = gql`
  mutation addRole($roleToSave: roleInput) {
    addRole(roleToSave: $roleToSave) {
      _id
      title
    }
  }
`;

export const REMOVE_ROLE = gql`
  mutation removeRole($Id: String!, $companyId: String!) {
    removeRole(Id: $Id, companyId: $companyId) {
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
  mutation addLocation($locationToSave: locationInput) {
    addLocation(locationToSave: $locationToSave) {
      _id
    }
  }
`;

export const REMOVE_LOCATION = gql`
  mutation removeLocation($Id: String!, $companyId: String!) {
    removeLocation(Id: $Id, companyId: $companyId) {
      _id
    }
  }
`;
