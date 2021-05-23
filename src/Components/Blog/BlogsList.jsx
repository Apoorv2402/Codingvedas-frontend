import React, { Component } from "react";
import {
  Row,
  Col,
  PageHeader,
  Card,
  Skeleton,
  Button,
  Typography,
  Spin,
} from "antd";
import { Link, Route } from "react-router-dom";
import { Content } from "antd/lib/layout/layout";
import AboutSection from "../AboutSection";


let { Meta } = Card;
const { Title, Text, Paragraph } = Typography;

const tabListNoTitle = [
  {
    key: "article",
    tab: "article",
  },
  {
    key: "app",
    tab: "app",
  },
  {
    key: "project",
    tab: "project",
  },
];

const contentListNoTitle = {
  article: <p>article content</p>,
  app: <p>app content</p>,
  project: <p>project content</p>,
};

export class BlogsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      posts: [],
      minValue: 0,
      maxValue: 9,
      noTitleKey: "app",
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
  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  nextHandler = () => {
    let { minValue, maxValue } = this.state;


    this.setState({
      minValue: maxValue,
      maxValue: maxValue + 9
    }, () => { console.log("min", minValue, "max", maxValue) });

  }

  prevHandler = () => {
    let { minValue, maxValue } = this.state;

    if (minValue >= 9) {
      this.setState({
        minValue: minValue - 9,
        maxValue: maxValue - 9
      }, () => { console.log("min", minValue, "max", maxValue) });
    }
  }


  render() {
    let { posts, isLoaded, minValue, maxValue } = this.state;
    console.log("posts:  ", posts);

    let BlogCards = posts.slice(minValue, maxValue).map((item, i) => {
      return (
        <Col className="blogCardsCol" sm={{ span: 24 }} md={{ span: 8 }}>
          <Link to={"/Blogs/" + item.id}>
            <Card
              className="blogCards"
              Key={i}
              hoverable
              size="default"
              cover={
                <img
                  alt="example"
                  height="fit-content"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title={item.title} description={item.body.slice(0, 150) + "..."} />
            </Card>
          </Link>
        </Col>
      );
    });
    return (
      <div className="blogListDiv">
        <Row>
          <Content className="blogListHeaderRow">
            <Col sm={{ span: 24 }} md={{ span: 7 }} className="mt-5">
              <Title className="mt-5">LEARN. EXPLORE.. EMPOWER...</Title>
            </Col>
            <Paragraph style={{ fontSize: "18px" }} level={2}>
              Learning is where everything starts, but continuous practice and
              discipline helps you reach new heights of success and raise your
              bar. So here’s our blog, where we constantly publish new material
              on the following topics to share our thoughts and learn from your
              experiences{" "}
            </Paragraph>
          </Content>
          <Col span={24}>
            <Title
              className="mt-4"
              level={2}
              style={{ textAlign: "center", width: "80%", marginRight: "auto", marginLeft: "auto" }}
            >Latest trend and right way to write a code & research.</Title>
          </Col>

          {isLoaded ? (
            <Col span={22} offset={1}>
              <Row align="top">{BlogCards}</Row>
            </Col>
          ) : (
            <Spin active />
          )}
        </Row>

        <Col span={20} offset={2}>
          <Row style={{ width: "100%" }}>

            <Col span={23} >
              <Button onClick={this.prevHandler} style={{ width: "80px" }}>Previous</Button>
            </Col>

            <Col span={1}>
              <Button onClick={this.nextHandler} style={{ width: "80px", float: "right" }}>Next</Button>
            </Col>
          </Row>
        </Col>
      </div>
    );
  }
}

export default BlogsList;
