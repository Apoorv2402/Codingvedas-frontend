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
import logoNavbar from "../images/logoNavba.png";
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
    let { isContactFormModalVisible } = this.state
    return (
      <Header
        className="header"
      >
        <div className="navbar">
          <div className="brand-container">
            <img
              src={logoNavbar}
              alt="logo"
            />
          </div>
          <div className="navbar-menu-container">
            <ul className="navbar-menu">
              <li className="navbar-menu-item"><Link className="navbar-link" to={"/"}>Home</Link></li>
              <li className="navbar-menu-item"><Link className="navbar-link" to={"/Blogs"}>Blogs</Link></li>
              {/* <li className="navbar-menu-item"><Link className="navbar-link" to={"/Courses"}>Courses</Link></li> */}
            </ul>


          </div>
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
