import React, { Component } from 'react'
import { Modal } from "antd";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";

export class Navigationbar extends Component {
  constructor() {
    super();
    this.state = {
      isContactFormModalVisible: false,
      navbarScrolled: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 380) {
        this.setState({ navbarScrolled: true });
      }
      else {
        this.setState({ navbarScrolled: false });
      }
    })
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', () => { })
  }

  isContactFormVisibleModalHandler = () => {
    this.setState({
      isContactFormModalVisible: !this.state.isContactFormModalVisible,
    });
  };
  
  render() {
    let { isContactFormModalVisible, navbarScrolled } = this.state
    return (
      <Navbar collapseOnSelect expand="md" sticky="top"
        className={!navbarScrolled ? `px-4 navbar-main` : `px-4 navbar-main-scrolled`}
      >
        <Navbar.Brand >CodingVedas</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{ width: "95%", justifyContent: "flex-end" }}>
            <Link className="nav-link" to={"/"}>Home</Link>
            <Link className="nav-link" to={"/Blogs"}>Blogs</Link>
          </Nav>
        </Navbar.Collapse>
        <Modal
          title="Contact Form"
          visible={isContactFormModalVisible}
          footer={null}
          onCancel={() => this.setState({ isContactFormModalVisible: false })}
        >
          <ContactForm />
        </Modal>
      </Navbar>
    )
  }
}

export default Navigationbar
