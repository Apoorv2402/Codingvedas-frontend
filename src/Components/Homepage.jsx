import React, { Component } from "react";
import { Carousel } from 'react-bootstrap';
import bloglist from '../images/bloglist.jpg';
import GridItems from "./GridItems";
import {Col, Layout, Typography} from 'antd'
import AboutSection from "./AboutSection";
const {Title, Paragraph} = Typography;
const {Content} = Layout;

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export class Homepage extends Component {
  render() {
    return (
      <div>
        <Content className="home-page-header">
            <Col xs={{ span: 24 }} md={{ span: 7, offset:18 }} className="my-5">
              <Title className=" text-white">LEARN. EXPLORE.. EMPOWER...</Title>
            </Col>
            {/* <Col xs={{ span: 24 }} md={{ span: 16, offset:8 }} >
            <Paragraph style={{ fontSize: "18px"}} className="text-white"level={2}>
              Learning is where everything starts, but continuous practice and
              discipline helps you reach new heights of success and raise your
              bar. So here’s our blog, where we constantly publish new material
              on the following topics to share our thoughts and learn from your
              experiences{" "}
            </Paragraph>
            </Col> */}
          </Content>
            <Col xs={{ span: 22, offset:1 }}>

        <GridItems />
        <AboutSection />
            </Col>
      </div>
    );
  }
}

export default Homepage;
