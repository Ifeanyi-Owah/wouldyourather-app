import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class HomePage extends Component {
  render() {
    console.log(this.props);
    return (
      <ul
        className="list-group mt-2 card p-3"
        style={{ width: "600px", margin: "0 auto" }}
      >
        {this.props.questionId.map((id) => (
          <Question id={id} key={id} />
        ))}
      </ul>
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
