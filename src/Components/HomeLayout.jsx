import React, { Component } from "react";
import {
  Layout,
  BackTop
} from "antd";
import { Link, Route } from "react-router-dom";
import CoursesList from "./Courses/CoursesList";
import Routes from "../Routes/Routes";
import logoNavbar from "../images/logoNavbar.png";
import ContactForm from "./ContactForm";
import AboutSection from "./AboutSection";
import Footer from "./Footer";
import Navbar from "./Navbar";
const { Header, Sider, Content } = Layout;

export default class HomeLayout extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout>
        <Navbar />
        <Content className="site-layout">
          <Routes />
          <AboutSection />
        <BackTop />
        <Footer />
        </Content>
      </Layout>
    );
  }
}
