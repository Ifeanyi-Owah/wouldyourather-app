import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class HomePage extends Component {
  render() {
    console.log(this.props);
    return (
      <div
        className="mt-4"
        style={{ outline: "1px solid blue", width: "600px", margin: "0 auto" }}
      >
        <button className="btn btn-light border border-right w-50 text-success font-weight-bold">
          Unaswered Questions
        </button>
        <button className="btn btn-white border border-left w-50 font-weight-bold">
          Answered Questions
        </button>
        <ul className="list-group mt-0 card p-3">
          {this.props.questionId.map((id) => (
            <Question id={id} key={id} />
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ questions }) {
  return {
    questionId: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
  };
}

export default connect(mapStateToProps)(HomePage);
