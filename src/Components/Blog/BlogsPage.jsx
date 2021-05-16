import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, PageHeader, Card, Skeleton, Pagination, Spin } from "antd";
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
      <div style={{minHeight:"1000px"}}>
        {isLoaded ? (
          <Row>
            <Col span={18} className="">
              <PageHeader
                className="site-page-header"
                onBack={() => null}
                title={posts[blogId].title}
                subTitle={false}
              />
              <img
                alt="example"
                height="100px"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
              <p>{posts[blogId].body}</p>
            </Col>
          </Row>
        ) : (
          <Skeleton active />
        )}
      </div>
    );
  }
}

export default withRouter(BlogsPage);
