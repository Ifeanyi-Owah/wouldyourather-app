import React, { Component } from "react";
import { connect } from "react-redux";

class HomePage extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>HomePage</h1>
      </div>
    );
  }
}

function mapStateToProps({ questions }) {
  return {
    questionsId: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
  };
}

export default connect(mapStateToProps)(HomePage);
