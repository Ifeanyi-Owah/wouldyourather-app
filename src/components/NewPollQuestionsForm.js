import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class NewPollQuestionsForm extends Component {
  state = {
    redirectToHome: false,
    optionone: "",
    optiontwo: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      redirectToHome: true,
    });
  };

  handleClick = (e) => {
    this.handleSubmit();
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { redirectToHome } = this.state;
    if (redirectToHome === true) {
      return <Redirect to="/" />;
    }
    return (
      <div
        className="card bg-light text-left"
        style={{ width: "500px", margin: "0 auto" }}
      >
        <h1 className="card-header">Create New Question</h1>
        <h2>Complete the question</h2>
        <form action className="p-2">
          <div className="form-group text-left">
            <label htmlFor="optionone">Would You Rather...</label>
            <input
              type="text"
              name="optionone"
              className="form-control"
              id="optionone"
              placeholder="Enter Option One Text Here"
              value={this.state.optionOne}
              onChange={this.handleChange}
            />
          </div>
          {/* <h2>OR</h2> */}
          <div className="form-group">
            <label htmlFor="optiontwo">OR</label>
            <input
              type="text"
              name="optiontwo"
              className="form-control"
              id="optiontwo"
              placeholder="Enter Option Two Text Here"
              value={this.state.optionTwo}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary w-100"
            onClick={this.handleClick}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default NewPollQuestionsForm;
