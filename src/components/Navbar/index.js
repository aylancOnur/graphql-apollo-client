import styles from "./navbar.module.css";
import { Menu, Row, Col } from "antd";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Row justify="center">
      <Col span={14}>
        <Menu mode="horizontal">
          <Menu.Item key="/" className={styles.menuItem}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/new" className={styles.menuItem}>
            <Link to="/new">New Post</Link>
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
};

export default Navbar;
