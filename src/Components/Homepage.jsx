import React, { Component } from "react";
import { Carousel } from 'react-bootstrap';
import bloglist from '../images/bloglist.jpg';


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
        <Carousel effect="fade" autoplay >
          <Carousel.Item className="carousel-image-container">
            <img 
              alt="example"
              src={bloglist}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Homepage;
