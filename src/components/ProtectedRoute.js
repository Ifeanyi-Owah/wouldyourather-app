import React, { Component } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

function ProtectedRoute({ children, authedUser, ...rest }) {
  console.log(authedUser);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return authedUser ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        );
      }}
    />
  );
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default withRouter(connect(mapStateToProps)(ProtectedRoute));
