import React from 'react'
import {
  Row,
  Col,
  PageHeader,
  Card,
  Skeleton,
  Pagination,
  Typography,
} from "antd";
import {LinkedinFilled,FacebookFilled,InstagramFilled} from '@ant-design/icons'
import { Link, Route } from "react-router-dom";
import { Content } from "antd/lib/layout/layout";

let { Meta } = Card;
const { Title, Text, Paragraph } = Typography;
function Footer() {
  return (
    <Col span={24} className="footer-section">
      <Row>
        <Col md={{span:8}}>

        </Col>
        <Col md={{span:8}}>
       
        </Col>
        <Col md={{span:8}}>

        </Col>
        
      </Row>
      <Row>
        <Col md={{span:4,offset:10}}>
        <Text >
        <li className="navbar-menu-item"><Link className="navbar-link" to={"/Blogs"}>Blogs</Link></li>

      Codingvedas ©2021
        </Text>
        </Col>
      
      </Row>
    </Col>
  )
}


export default Footer
