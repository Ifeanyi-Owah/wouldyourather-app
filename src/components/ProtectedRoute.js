import React, { Component } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class ProtectedRoute extends Component {
  render() {
    const { children, authedUser, ...rest } = this.props;
    console.log(authedUser);
    return (
      <Route
        {...rest}
        render={({ location }) => {
          return rest.authedUser ? (
            children
          ) : (
            <Redirect to={{ pathname: "/login", state: { from: location } }} />
          );
        }}
      />
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default withRouter(connect(mapStateToProps)(ProtectedRoute));
