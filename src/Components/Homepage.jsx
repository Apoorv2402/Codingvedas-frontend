import React, { Component } from "react";
import { Carousel } from "antd";


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
        <Carousel effect="fade" autoplay style={{width:"100%", height:"400px"}}>
          <div >
            <img width="100%" height="400px"
              alt="example"
              
              src="https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Homepage;
