import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helper";
import { Link } from "react-router-dom";

class Question extends Component {
  render() {
    console.log(this.props);
    const { question, user, authedUser } = this.props;
    console.log(authedUser, question.author);
    if (question === null) {
      return <p>This question doesn't exist</p>;
    }
    return (
      <li className="list-group-item shadow p-0 mb-5 bg-white rounded card">
        <div className="card-header">
          <h2
            className="dispaly-4 bg-light text-left font-weight-bold"
            style={{ fontSize: "18px" }} // review inline style
          >
            {user.name} asks:
          </h2>
        </div>
        <div className="d-flex p-4">
          <img
            className="rounded-circle w-25 ml-2 mr-4"
            src={user.avatarURL}
            style={{
              // width: "100px",
              // outline: "1px solid red",
              margin: "0 auto",
            }}
            alt={`Avatar of ${user.name}`}
          />
          <div className="w-75 text-left pl-3 border-left">
            {/* // review inline style */}
            <h3 className="font-weight-bold" style={{ fontSize: "18px" }}>
              Would you rather
            </h3>
            <p>{question.optionOne.text}</p>
            <p className="d-none">{question.optionTwo.text}</p>
            <Link className="btn border border-success w-100 pr-5 pl-5 bg-light text-success mt-4">
              View Poll
            </Link>
          </div>
        </div>
      </li>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];
  const user = users[question.author];
  return {
    authedUser,
    user,
    question: question
      ? formatQuestion({
          optionOneText: question.optionOne.text,
          optionTwoText: question.optionTwo.text,
          author: question.author,
        })
      : null,
  };
}

export default connect(mapStateToProps)(Question);
