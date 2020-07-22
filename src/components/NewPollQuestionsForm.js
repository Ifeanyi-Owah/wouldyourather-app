import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class NewPollQuestionsForm extends Component {
  state = {
    redirectToHome: false,
    optionOneText: "",
    optionTwoText: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // this.setState({
    //   redirectToHome: true,
    // });

    this.setState({
      [e.target.name]: "",
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { optionOneText, optionTwoText } = this.state;
    return (
      <div
        className="card bg-light text-left mt-4"
        style={{ width: "500px", margin: "0 auto" }}
      >
        <h2 className="card-header text-center display-5 font-weight-bold">
          Create New Question
        </h2>
        <p className="pl-3 pt-3 mb-0">Complete the question:</p>
        <form action className="p-3 mt-0" onSubmit={this.handleSubmit}>
          <div className="form-group text-left">
            <label htmlFor="optionone"></label>
            <span className="font-weight-bold mb-2 d-block">
              Would You rather...
            </span>
            <input
              type="text"
              name="optionOneText"
              className="form-control"
              id="optionone"
              placeholder="Enter Option One Text Here"
              value={optionOneText}
              onChange={this.handleChange}
            />
          </div>
          {/* <h2>OR</h2> */}
          <div className="form-group">
            <label htmlFor="optiontwo"></label>
            <span className="text-center font-weight-bold d-block">OR</span>
            <input
              type="text"
              name="optionTwoText"
              className="form-control"
              id="optiontwo"
              placeholder="Enter Option Two Text Here"
              value={optionTwoText}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            class="btn btn-success w-100"
            onClick={this.handleClick}
            disabled={optionOneText === "" || optionTwoText === ""}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default NewPollQuestionsForm;
