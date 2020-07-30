import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

class ProtectedRoute extends Component {
  render() {
    const { isAthenticated } = this.props;
    const Component = this.props.component;

    return isAthenticated ? (
      <Route exact path="/add" render={() => <Component />} />
    ) : (
      <Redirect to={{ pathname: "/login" }} />
    );
  }
}

export default ProtectedRoute;
