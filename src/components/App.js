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
import ProtectedRoute from "./ProtectedRoute";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  state = {
    isLogin: false,
  };

  render() {
    const { isLogin } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar isLogin={isLogin} />
          <LoadingBar />
          <Switch>
            <Route exact path="/login" render={() => <Login />} />
            <ProtectedRoute
              exact
              path="/"
              render={() => (this.props.loading === true ? null : <HomePage />)}
            />
            <ProtectedRoute
              exact
              path="/add"
              render={() => <NewPollQuestionsForm />}
            />
            <ProtectedRoute
              exact
              path="/leaderboard"
              render={() => <LeaderBoard />}
            />
            <ProtectedRoute render={() => <NotFoundPage />} />
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
