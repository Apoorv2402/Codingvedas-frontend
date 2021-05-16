import React, { Component } from 'react'
import {
  Layout,
  Menu,
  Breadcrumb,
  PageHeader,
  Affix,
  Modal,
  Button,
} from "antd";
import { Link, Route } from "react-router-dom";
import CoursesList from "./Courses/CoursesList";
import Routes from "../Routes/Routes";
import logoNavbar from "../images/logoNavbar.png";
import ContactForm from "./ContactForm";
import AboutSection from "./AboutSection";
import Footer from "./Footer";
const { Header, Sider, Content } = Layout;



export class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isContactFormModalVisible: false,
    };
  }

  isContactFormVisibleModalHandler = () => {
    this.setState({
      isContactFormModalVisible: !this.state.isContactFormModalVisible,
    });
  };
  render() {
    let {isContactFormModalVisible} = this.state
    return (
         <Header
         className="navbar-header"
         >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              overflow: "hidden",
            }}
          >
            <img
              src={logoNavbar}
              width="170px"
              height="31px"
              alt="logo"
              style={{ marginTop: "1%" }}
            />
            {/* <h2 style={{ color: "Black" }}>Coding Vedas</h2> */}
            <Menu
              className="navbar-menu"
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
            >
              <Menu.Item  className="navbar-menu-item" >
                <Link to={"/"}>Home</Link>
              </Menu.Item>
              <Menu.Item  className="navbar-menu-item" key="2">About</Menu.Item>
              <Menu.Item  className="navbar-menu-item" key="3">
                <Link to={"/Blogs"}>Blogs</Link>
              </Menu.Item>
              <Menu.Item  className="navbar-menu-item" key="4">
                <Link to={"/Courses"}>Courses</Link>
              </Menu.Item>
              <Menu.Item className="navbar-menu-item" 
                key="5"
                onClick={this.isContactFormVisibleModalHandler}
              >
                Contact Us
              </Menu.Item>
            </Menu>
          </div>

          <Modal
            title="Contact Form"
            visible={isContactFormModalVisible}
            footer={null}
            onCancel={() => this.setState({ isContactFormModalVisible: false })}
          >
            <ContactForm />
          </Modal>
        </Header>
    )
  }
}

export default Navbar
