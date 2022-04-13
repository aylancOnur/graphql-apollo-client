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

export const COMMENTS_SUBSCRIPTIONS = gql`
  subscription CommentCreated($post_id: ID) {
    commentCreated(post_id: $post_id) {
      id
      text
      user {
        fullName
        profile_photo
      }
    }
  }
`;
