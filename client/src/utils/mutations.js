import { gql } from '@apollo/client';

// Company and User Model would both require the same parameters for logging in
export const LOGIN_ADMIN = gql`
  mutation loginAdmin($email: String!, $password: String!) {
    loginAdmin(email: $email, password: $password) {
      token
    }
  }
`;

// -
export const ADD_EMPLOYEE = gql`
  mutation addEmployee(
    $firstName: String!
    $lastName: String!
    $username: String!
    $password: String!
    $location: String!
    $email: String!
    $phone: Int!
    $role: roleInput!
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
      _id
      firstName
      lastName
      username
      location
      email
      phone
      role {
        title
      }
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
        email
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost(
    $shiftTime: shiftTimeInput
    $additionalInfo: String
    $location: locationInput
    $role: String!
    $tags: String
  ) {
    addPost(
      shiftTime: $shiftTime
      additionalInfo: $additionalInfo
      location: $location
      role: $role
      tags: $tags
    ) {
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
