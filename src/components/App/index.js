import styles from "./app.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Post from "pages/Post";
import NewPost from "pages/NewPost";
import Navbar from "components/Navbar";
import { Col, Row } from "antd";
import PostCounter from "components/PostCounter";

function App() {
  return (
    <BrowserRouter>
      <Row justify="center">
        <Col span={14} className={styles.content}>
          <Row>
            <Col span={18}>
              <Navbar />
            </Col>
            <Col span={6}>
              <PostCounter />
            </Col>
          </Row>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/new" element={<NewPost />} />
          </Routes>
        </Col>
      </Row>
    </BrowserRouter>
  );
}

export default App;
