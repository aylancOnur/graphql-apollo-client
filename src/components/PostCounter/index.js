import styles from "./postCounter.module.css";
import { Badge, Avatar } from "antd";
import { useSubscription } from "@apollo/client";
import { POST_COUNT_SUBSCRIPTION } from "./queries";

const PostCounter = () => {
  const { loading, data } = useSubscription(POST_COUNT_SUBSCRIPTION);

  return (
    <div className={styles.container}>
      <Badge count={loading ? "?" : data.postCount} size="small">
        <Avatar shape="square" size="medium">
          <span className={styles.counterTitle}>Posts</span>
        </Avatar>
      </Badge>
    </div>
  );
};

export default PostCounter;
