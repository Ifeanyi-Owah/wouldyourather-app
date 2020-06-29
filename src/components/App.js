import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import HomePage from "./HomePage";
import "./App.css";
import NavBar from "./NavBar";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          {this.props.loading === true ? null : <HomePage />}
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
