import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helper";

class Question extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Question</h1>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions }, { id }) {
  const question = questions[id];
  return {
    authedUser,
    question: formatQuestion({
      optionOneText: question.optionOne.text,
      optionTwoText: question.optionTwo.text,
      author: question.author,
    }),
  };
}

export default connect(mapStateToProps)(Question);
