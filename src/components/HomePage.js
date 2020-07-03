import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class HomePage extends Component {
  render() {
    console.log(this.props);
    return (
      <div
        style={{ outline: "1px solid blue", width: "600px", margin: "0 auto" }}
      >
        <button className="w-50">unaswered</button>
        <button className="w-50">anwered</button>
        <ul className="list-group mt-2 card p-3">
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
