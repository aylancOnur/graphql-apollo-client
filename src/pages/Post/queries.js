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

export const GET_POSTS_COMMENTS = gql`
  query getPostsComments($id: ID!) {
    post(id: $id) {
      comments {
        id
        text
        user {
          fullName
          profile_photo
        }
      }
    }
  }
`;
