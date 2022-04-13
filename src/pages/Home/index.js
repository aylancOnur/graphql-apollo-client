import styles from "./home.module.css";
import { List, Avatar } from "antd";
import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS, POSTS_SUBSCRIPTIONS } from "./queries";
import Loading from "components/Loading";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const { loading, error, data, subscribeToMore } = useQuery(GET_ALL_POSTS);

  useEffect(() => {
    subscribeToMore({
      document: POSTS_SUBSCRIPTIONS,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;

        return {
          posts: [subscriptionData.data.postCreated, ...prev.posts],
        };
      },
    });
  }, [subscribeToMore]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message} </div>;
  }

  return (
    <List
      itemLayout="horizontal"
      dataSource={data.posts}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={item.user.profile_photo} />}
            title={<Link to={`/post/${item.id}`}>{item.title}</Link>}
            description={
              <Link to={`/post/${item.id}`} className={styles.listItem}>
                {item.short_description}
              </Link>
            }
          />
        </List.Item>
      )}
    />
  );
};

export default Home;
