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
  query company($id: ID!) {
    company(_id: $id) {
      name
      username
      email
      locationArr {
        intersection
        address {
          city
          country
          postalCode
        }
      }
      userArr {
        _id
        firstName
        lastName
      }
      rolesArr {
        _id
        title
      }
      postsArr {
        _id
        shiftTime {
          hour
          date
        }
        additionalInfo
        location {
          _id
          intersection
          employees {
            _id
            firstName
            lastName
            username
            role {
              title
            }
            email
            phone
          }
        }
        role {
          title
        }
        tags {
          title
        }
      }
    }
  }
`;

export const GET_COMPANIES = gql`
  query companies {
    companies {
      name
      username
      email
      postsArr {
        _id
        shiftTime {
          hour
          date
        }
        additionalInfo
        location {
          _id
          intersection
          employees {
            _id
            firstName
            lastName
            username
            role {
              title
            }
            email
            phone
          }
        }
        role {
          title
        }
        tags {
          title
        }
      }
    }
  }
`;

// Query Location
export const GET_LOCATIONS = gql`
  query locations($companyId: ID!) {
    locations(companyId: $companyId) {
      intersection
      address {
        locationName
        number
        street
        city
        country
        postalCode
      }
      employees {
        _id
        firstName
        lastName
        username
        role {
          title
        }
        email
        phone
      }
    }
  }
`;

// Query Post -
export const GET_POSTS = gql`
  query posts {
    posts {
      _id
      shiftTime {
        hour
        date
      }
      additionalInfo
      location {
        address {
          locationName
          number
          street
          city
          country
          postalCode
        }
        intersection
      }
      role {
        title
      }
      tags {
        title
      }
    }
  }
`;

export const GET_POST = gql`
  query post($id: ID!) {
    post(_id: $id) {
      _id
      shiftTime {
        hour
        date
      }
      additionalInfo
      locationArr {
        _id
        address {
          locationName
          number
          street
          city
          country
          postalCode
        }
        intersection
      }
      role {
        title
      }
      tags {
        title
      }
    }
  }
`;

// Query Roles
export const GET_ROLES = gql`
  query roles($companyId: ID!) {
    roles(companyId: $companyId) {
      _id
      title
      companyId {
        _id
      }
    }
  }
`;
// Query Role
export const GET_ROLE = gql`
  query role($id: ID!) {
    role(_id: $id) {
      companyId {
        _id
      }
      title
    }
  }
`;

// Query Tags
export const GET_TAGS = gql`
  query tags($companyId: ID!) {
    tags(companyId: $companyId) {
      _id
      title
      companyId {
        _id
      }
    }
  }
`;
// Query Tag
export const GET_TAG = gql`
  query tag($id: ID!) {
    tag(_id: $id) {
      title
      companyId {
        _id
      }
    }
  }
`;

// Added this query for testing purposes
export const GET_ALL_USERS = gql`
  query allUsers {
    allUsers {
      _id
      firstName
      lastName
      username
      role {
        title
      }
      location
      email
      phone
    }
  }
`;
// Query Users
export const GET_COMPANY_USERS = gql`
  query users($companyId: ID!) {
    users(companyId: $companyId) {
      _id
      firstName
      lastName
      username
      role {
        title
      }
      location
      email
      phone
    }
  }
`;
// Query Users
export const GET_USER = gql`
  query user($_id: ID!) {
    user(_id: $_id) {
      _id
      firstName
      lastName
      username
      role {
        title
      }
      location
      email
      phone
    }
  }
`;
