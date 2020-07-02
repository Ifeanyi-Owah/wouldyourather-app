import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helper";
import { Link } from "react-router-dom";

class Question extends Component {
  render() {
    console.log(this.props);
    const { question, user } = this.props;
    console.log(user);
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
            className="rounded-circle w-25 ml-2"
            src={user.avatarURL}
            style={{
              // width: "100px",
              // outline: "1px solid red",
              margin: "0 auto",
            }}
            alt={`Avatar of ${user.name}`}
          />
          <div className="w-75">
            <h3>Would you rather</h3>
            <p>{question.optionOne.text}</p>
            <p className="d-none">{question.optionTwo.text}</p>
            <Link>View Details</Link>
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
    question: formatQuestion({
      optionOneText: question.optionOne.text,
      optionTwoText: question.optionTwo.text,
      author: question.author,
    }),
  };
}

export default connect(mapStateToProps)(Question);
