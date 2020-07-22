import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import HomePage from "./HomePage";
import "./App.css";
import NavBar from "./NavBar";
import LeaderBoard from "./LeaderBoard";
import NewPollQuestionsForm from "./NewPollQuestionsForm";
import NotFoundPage from "./NotFoundPage";
import LoadingBar from "react-redux-loading";
import Login from "./Login";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <LoadingBar />
          <Switch>
            <Route exact path="/" render={() => <Login />} />
            <Route
              exact
              path="/home"
              render={() => (this.props.loading === true ? null : <HomePage />)}
            />
            <Route exact path="/add" render={() => <NewPollQuestionsForm />} />
            <Route exact path="/leaderboard" render={() => <LeaderBoard />} />
            <Route render={() => <NotFoundPage />} />
          </Switch>
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
