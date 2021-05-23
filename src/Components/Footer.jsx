import React from 'react'
import { Row, Col, Card, Typography } from "antd";
import { Link} from "react-router-dom";

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
      Codingvedas ©2021
        </Text>
        </Col>
      
      </Row>
    </Col>
  )
}


export default Footer
