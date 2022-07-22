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
  query companies($name: String) {
    company(name: $name){
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
          storeId
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

export const GET_LOCATION = gql`
{
query locations()
}`
// Query Post
export const GET_POSTS = gql`
{
query posts($id)
}`

// Query Role
// Query Tag
// Queyr User
