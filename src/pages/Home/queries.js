import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query getAllPosts {
    posts {
      id
      title
      description
      short_description
      user {
        profile_photo
      }
    }
  }
`;
