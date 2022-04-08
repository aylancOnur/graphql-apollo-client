import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_POST_BY_ID } from "./queries";
import Loading from "components/Loading";
import { Typography, Image } from "antd";

const Post = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_POST_BY_ID, {
    variables: {
      id,
    },
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message} </div>;
  }

  const { post } = data;

  return (
    <div>
      <Typography.Title level={3}>{post.title}</Typography.Title>
      <Image src={post.cover} />
      <p>{post.description}</p>
    </div>
  );
};

export default Post;
