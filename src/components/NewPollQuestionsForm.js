import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class NewPollQuestionsForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    return <Redirect exact to="/" />;
  };

  render() {
    return (
      <div className="NewPollQuestionsForm">
        <h1>Create New Question</h1>
        <h2>Complete the question</h2>
        <form action="/" method="POST">
          <div className="form-group">
            <label htmlFor="optionOne">Would You Rather...</label>
            <input
              type="text"
              className="form-control"
              id="optionOne"
              placeholder="Enter Option One Text Here"
            />
          </div>
          {/* <h2>OR</h2> */}
          <div className="form-group">
            <label htmlFor="optionTwo">OR</label>
            <input
              type="text"
              className="form-control"
              id="optionTwo"
              placeholder="Enter Option Two Text Here"
            />
          </div>
          <button
            onClick={this.handleSubmit}
            type="submit"
            class="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default NewPollQuestionsForm;
