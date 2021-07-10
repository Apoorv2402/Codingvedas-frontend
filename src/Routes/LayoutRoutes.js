import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { CoursesList } from "../Components/Courses/CoursesList";
import Blog from "../Material/blog";
import HomeLayout from '../Components/HomeLayout';

export class LayoutRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div>
        <Switch>
          <Route exact="true" path={"/"}>
            <HomeLayout />
          </Route>
          <Route exact="true" path={"/Blogs"}>
            <Blog />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default LayoutRoutes;
