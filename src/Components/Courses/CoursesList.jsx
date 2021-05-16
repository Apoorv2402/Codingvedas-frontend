import React, { Component } from "react";

import { Row, Col, PageHeader, Card,Skeleton,Pagination } from "antd";
import { Link } from "react-router-dom";
let { Meta } = Card;

export class CoursesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      posts: [],
      minValue: 0,
      maxValue: 8
    };
  }

  paginationHandler = (value) =>{
    let {minValue,maxValue} = this.state
    if(value === 1){
      this.setState({
        minValue: 0,
        maxValue: 8
      });
    }else{
      this.setState({
        minValue: maxValue,
        maxValue: value * 8
      });
    }
  }
  componentDidMount() {
    let { posts,isLoaded } = this.state;
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ posts: result, isLoaded: true }, () => {
          console.log(posts);
        });
      });
  }

  render() {
    let { posts,isLoaded } = this.state;
    console.log("posts:  ", posts);
    let BlogCards = "<Card> </Card>";

    BlogCards = posts.map((item, i) => {
      return (
        <Link Key={i} to={"/Courses/"+item.id}>
        <Card
          
          hoverable
          style={{ width: 180, margin: "8px" }}
          cover={
            <img
              alt="example"
              height="100px"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
          }
        >
          <Meta title={item.title} description={item.body.slice(20,35)} />
        </Card>
              </Link>
      );
    });
    return ( 
      <Row style={{minHeight:"800px"}}>
        <Col span={24}>
        <PageHeader
        className="site-page-header"
        title="Courses"
        subTitle="This is a subtitle"
        />
        </Col>

        {isLoaded? 
        <Col span={18}>
        <Row>{BlogCards}</Row>
        </Col>
        :<Skeleton active/>}
        <Col span={6} ><PageHeader
        className="site-page-header"
        title="Sidebar"
        // subTitle="This is a subtitle"
        /></Col>
        <Row className="mt-5">

        <Pagination defaultCurrent={1}
          defaultPageSize={8}
      
          total={posts.length} onChange={this.paginationHandler} />
        </Row>
        </Row>

     )
  }
}

export default CoursesList;
