import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
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
    isAuthenticated: false,
  };

  login = (id) => {
    if (this.props.userId.includes(id)) {
      this.setState({
        isAuthenticated: true,
      });
    }
  };

  // logout = () => {};

  render() {
    const { isAuthenticated } = this.state;
    const { userId } = this.props;
    console.log(userId, isAuthenticated);

    return (
      <BrowserRouter>
        <div className="App">
          <NavBar isAuthenticated={isAuthenticated} />
          <LoadingBar />
          <Switch>
            <Route
              exact
              path="/login"
              render={() => (
                <Login
                  userId={userId}
                  login={this.login}
                  authenticate={isAuthenticated}
                />
              )}
            />
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              exact
              path="/"
              render={() => (this.props.loading === true ? null : <HomePage />)}
            />
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              exact
              path="/add"
              render={() => <NewPollQuestionsForm />}
            />
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              exact
              path="/leaderboard"
              render={() => <LeaderBoard />}
            />
            <Route render={() => <NotFoundPage />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    userId: Object.keys(users),
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
