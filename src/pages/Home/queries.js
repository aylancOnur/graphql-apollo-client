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

export const POSTS_SUBSCRIPTIONS = gql`
  subscription {
    postCreated {
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
