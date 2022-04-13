import { useEffect, useState } from "react";
import styles from "./comments.module.css";
import { Divider, Button, Comment, List } from "antd";
import { useLazyQuery } from "@apollo/client";
import { COMMENTS_SUBSCRIPTIONS, GET_POSTS_COMMENTS } from "./queries";

const Comments = ({ post_id }) => {
  const [btnIsVisible, setBtnIsVisible] = useState(true);

  const [loadComments, { called, loading, data, subscribeToMore }] =
    useLazyQuery(GET_POSTS_COMMENTS, { variables: { id: post_id } });

  const getComments = () => {
    loadComments();
  };

  useEffect(() => {
    if (!loading && called) {
      subscribeToMore({
        document: COMMENTS_SUBSCRIPTIONS,
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) return prev;

          const newCommentItem = subscriptionData.data.commentCreated;

          return {
            post: {
              ...prev.post,
              comments: [...prev.post.comments, newCommentItem],
            },
          };
        },
      });
    }
  }, [loading, called, subscribeToMore]);

  useEffect(() => {
    if (!loading && data) {
      setBtnIsVisible(false);
    }
  }, [loading, data]);

  return (
    <>
      <Divider>Comments</Divider>
      {btnIsVisible ? (
        <div className={styles.showCommentsBtnContainer}>
          <Button loading={loading} onClick={getComments} type="primary">
            Show Comments
          </Button>
        </div>
      ) : (
        <></>
      )}
      {!loading && data && (
        <List
          className="comment-list"
          itemLayout="horizontal"
          dataSource={data.post.comments}
          renderItem={(item) => (
            <li>
              <Comment
                author={item.user.fullName}
                avatar={item.user.profile_photo}
                content={item.text}
              />
            </li>
          )}
        />
      )}
    </>
  );
};

export default Comments;
