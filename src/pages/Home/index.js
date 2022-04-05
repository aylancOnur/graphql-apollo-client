import styles from "./home.module.css";
import { Row, Col, List, Avatar } from "antd";
import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS } from "./queries";
import Loading from "components/Loading";

const Home = () => {
  const { loading, error, data } = useQuery(GET_ALL_POSTS);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message} </div>;
  }

  console.log(data);

  return (
    <div className={styles.container}>
      <Row justify="center">
        <Col span={14} className={styles.content}>
          <List
            itemLayout="horizontal"
            dataSource={data.posts}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.user.profile_photo} />}
                  title={<a href="https://ant.design">{item.title}</a>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
