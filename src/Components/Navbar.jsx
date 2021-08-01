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

  // componentDidMount() {
  //   console.log("--=-=props-=-=", this.props)
  //   window.addEventListener('scroll', () => {
  //     if (window.scrollY > 365) {
  //       this.setState({ navbarScrolled: true });
  //     }
  //     else {
  //       this.setState({ navbarScrolled: false });
  //     }
  //   })
  // }

  // componentDidUpdate(){
  //   console.log("didupdate-=props-=-=", this.props)

  // }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', () => { })
  // }

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
        expand="md" 
        variant="light"
        bg="transparent"
        
         className="px-4 navbar-main justify-content-space-between"
      >
        <Navbar.Brand >CodingVedas</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav >
            <Nav.Link className="nav-link" href={"/"}>Home</Nav.Link>
            <Nav.Link className="nav-link" href={"/Blogs"}>Blogs</Nav.Link>
            <Link className="nav-link" onClick={()=>{
              this.setState({isContactFormModalVisible:true})
            }}>Sign Up</Link>
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
