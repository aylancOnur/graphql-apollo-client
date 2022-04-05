import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query getAllPosts {
    posts {
      id
      title
      description
      user {
        profile_photo
      }
    }
  }
`;
