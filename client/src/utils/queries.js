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
// Query Tag
// Queyr User
