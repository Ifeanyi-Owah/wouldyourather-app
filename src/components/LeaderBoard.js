import React, { Component } from "react";
import { connect } from "react-redux";
import Leader from "./Leader";

class LeaderBoard extends Component {
  render() {
    return (
      <div style={{ width: "700px", margin: "0 auto" }}>
        <ul className="list-group mt-2 p-3">
          {this.props.questionId.map((id) => (
            <Leader id={id} key={id} />
          ))}
          {/* <Leader />
        <Leader />
        <Leader /> */}
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

export default connect(mapStateToProps)(LeaderBoard);
