import React, { Component } from "react";
import { connect } from "react-redux";

class HomePage extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>HomePage</h1>
        <ul className="list-group">
          {this.props.questionId.map((id) => (
            <li key={id} className="list-group-item">
              <div>questionId: {id}</div>
            </li>
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