import React, { Component } from "react";
import {
  Layout,
  BackTop
} from "antd";
import Routes from "../Routes/Routes";
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
        <BackTop />
        <Footer />
        </Content>
      </Layout>
    );
  }
}
