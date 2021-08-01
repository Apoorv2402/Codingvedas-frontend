import React, { Component } from "react";
import {
  Row,
  Col,
  PageHeader,
  Card,
  Skeleton,
  Pagination,
  Typography,
  Anchor,
} from "antd";
import {
  LinkedinFilled,
  FacebookFilled,
  InstagramFilled,
} from "@ant-design/icons";
import { Link, Route } from "react-router-dom";
import { Content } from "antd/lib/layout/layout";
import ui from '../images/Icons/ui.png'
import md from '../images/Icons/md.png'
import sd from '../images/Icons/sd.png'
import wp from '../images/Icons/wp.png'

const { Title } = Typography;

export class AboutSection extends Component {
  render() {
    return (
      <Col span={24} className="about-section ">
        <Title level={1} className="text-center mb-5">ABOUT US</Title>
        <Row span={24} className="services">
          <Col sm={6} className="service-card">
            <img src={ui} alt="img" />
            <h5>UI/UX</h5>
          </Col>
          <Col sm={6} className="service-card">
            <img src={wp} alt="img" />
            <h5>Web Apps</h5>
          </Col>
          <Col sm={6} className="service-card">
            <img src={md} alt="img" />
            <h5>Mobile Apps</h5>
          </Col>
          <Col sm={6} className="service-card">
            <img src={sd} alt="img" />
            <h5>System Design</h5>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default AboutSection;
