import React, { Component } from "react";
import { connect } from "react-redux";

class Leader extends Component {
  render() {
    console.log(this.props);
    const { user } = this.props;
    return (
      <li className="list-group-item shadow pt-3 pb-3 mb-5 bg-white rounded card">
        <div className="d-flex">
          <img
            className="rounded-circle w-25 ml-2 mr-2"
            src={user.avatarURL}
            alt={`Avatar of ${user.name}`}
          />
          <div className="mr-5">
            <h2>{user.name}</h2>
            <p>Anwered questions</p>
            <p>Unanswered question</p>
          </div>
          <div className="card ml-5">
            <h3 className="card-header">Score</h3>
            <div className="btn rounded-circle bg-success">10</div>
          </div>
        </div>
      </li>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const user = users[id];

  return {
    authedUser,
    user,
    // question: question
    //   ? formatQuestion({
    //       optionOneText: question.optionOne.text,
    //       optionTwoText: question.optionTwo.text,
    //       author: question.author,
    //     })
    //   : null,
  };
}

export default connect(mapStateToProps)(Leader);
