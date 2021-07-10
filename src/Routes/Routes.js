import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { CoursesList } from "../Components/Courses/CoursesList";
import Blog from "../Material/blog";
import Homepage from "../Components/Homepage";
import CourseDetails from "../Components/Courses/CourseDetails";
import { BlogsPage } from "../Components/Blog/BlogsPage";

export class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { isContactFormModalVisible } = this.props;
    console.log(isContactFormModalVisible);
    return (
      <div>
        <Switch>
          <Route exact="true" path={"/Courses"}>
            {" "}
            <CoursesList />{" "}
          </Route>
          <Route exact="true" path={"/"}>
            <Homepage />{" "}
          </Route>
          <Route exact="true" path={"/Blogs"}>
            {" "}
            <Blog />{" "}
          </Route>
          <Route exact="true" path={"/Courses/:id"}>
            {" "}
            <CourseDetails />{" "}
          </Route>
          <Route exact="true" path={"/Blogs/:id"}>
            {" "}
            <BlogsPage/>{" "}
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Routes;
