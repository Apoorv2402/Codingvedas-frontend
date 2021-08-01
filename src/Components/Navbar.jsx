import React, { Component } from 'react'
import { Modal } from "antd";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link, withRouter } from "react-router-dom";
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
       if (window.scrollY > 250) {
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
      <Navbar 
        collapseOnSelect
        variant="light"
        expand="md" 
        fixed="top"
        className={!navbarScrolled ? 
          " navbar-main ": 
          "  navbar-main bg-white"}
      >
        <Navbar.Brand >CodingVedas</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav style={{ width: "95%", justifyContent: "flex-end" }}>
            <Link className="nav-link" to={"/"}>Home</Link>
            <Link className="nav-link" to={"/Blogs"}>Blog</Link>
            <Link className="nav-link" onClick={()=> this.isContactFormVisibleModalHandler()}>Login</Link>
            <button className="nav-btn" onClick={()=> this.isContactFormVisibleModalHandler()}>
              Get Started
            </button>
          </Nav>
        </Navbar.Collapse>
        <Modal
          title="Sign Up"
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

export default withRouter(Navigationbar);
