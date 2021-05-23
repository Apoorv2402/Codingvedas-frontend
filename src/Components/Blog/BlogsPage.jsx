import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, PageHeader, Card, Skeleton, Pagination, Spin, Image } from "antd";
import { Carousel } from 'react-bootstrap';
import GridItems from "../GridItems";
let { Meta } = Card;

export class BlogsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      posts: [],
    };
  }

  componentDidMount() {
    let { posts, isLoaded } = this.state;
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ posts: result, isLoaded: true }, () => {
          console.log(posts);
        });
      });
  }

  render() {
    let { posts, isLoaded } = this.state;
    let blogId = 5;

    console.log("posts: ", posts);

    //console.log(this.props.match.params.id);
    return (
      <div >
        {isLoaded ? (
          <Row>
            <Col lg={{ span: 15, offset: 1 }}>
              <Card title={posts[blogId].title} className="page-card">
                


                <Carousel>
                  <Carousel.Item className="page-card-carousel">
                    <img
                      alt="example"
                      className="page-card-image"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                      />
                  </Carousel.Item>
                </Carousel>
                <Meta  description={posts[blogId].body} />
                     
                     
              </Card>
            </Col>
            <Col lg={{ span: 6, offset: 1 }} xs={{ span: 22, offset:1 }}>
              <GridItems />
            </Col>
          </Row>
        ) : (
          <Spin />
        )}
      </div>
    );
  }
}

export default withRouter(BlogsPage);
