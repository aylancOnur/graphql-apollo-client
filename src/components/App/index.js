import styles from "./app.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Post from "pages/Post";
import NewPost from "pages/NewPost";
import Navbar from "components/Navbar";
import { Col, Row } from "antd";

function App() {
  return (
    <BrowserRouter>
      <Row justify="center">
        <Col span={14} className={styles.content}>
          <Navbar />
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
