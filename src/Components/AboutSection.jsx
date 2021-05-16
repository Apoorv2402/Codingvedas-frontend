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

let { Meta } = Card;
const { Title, Text, Paragraph } = Typography;

export class AboutSection extends Component {
  render() {
    return (
      <Col md={{ span: 22, offset: 1 }} className="about-section">
        <Row >
          <Col md={{span:15}} >
            <Title>Who we are</Title>
            <Paragraph>
              With over 12 years of software engineering experience and 150+
              projects under our belt, we know how to maximize business value
              and ensure sustainability with custom technical solutions. We not
              only design and deliver high-quality, stable, scalable, and
              functional digital products but also share the valuable and wide
              ranging knowledge of 300+ talented developers. 4.8/5
            </Paragraph>
          </Col>
          <Col md={{span:8, offset:1}} style={{width:"100%"}}>
            <Title>Social</Title>
            <a><FacebookFilled  className="social-icons"/></a>
            
            <a><InstagramFilled className="social-icons"/></a>
            
            <a><LinkedinFilled className="social-icons"/></a>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default AboutSection;
