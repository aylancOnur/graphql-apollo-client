import { gql } from "@apollo/client";

export const GET_POST_BY_ID = gql`
  query getPostById($id: ID!) {
    post(id: $id) {
      title
      description
      cover
      user {
        fullName
      }
    }
  }
`;
