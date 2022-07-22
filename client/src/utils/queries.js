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
{
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
  }
}`
// Query Location
export const GET_LOCATIONS = gql`
{
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
  }
}`
// Query Post
export const GET_POSTS = gql`
{
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
  }
}`

// Query Role
// Query Tag
// Queyr User
