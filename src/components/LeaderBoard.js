import React, { Component } from "react";
import { connect } from "react-redux";
import Leader from "./Leader";

class LeaderBoard extends Component {
  render() {
    return (
      <div style={{ width: "700px", margin: "0 auto" }}>
        <ul className="list-group mt-2 p-3">
          {this.props.userLeader
            .map((user) => (
              <Leader
                id={user.id}
                key={user.id}
                name={user.name}
                avatarUrl={user.avatarURL}
                answeredQuestions={user.answeredQuestions}
                createdQuestions={user.createdQuestions}
                score={user.score}
              />
            ))
            .sort((a, b) => b.store - a.store)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  const userId = Object.keys(users);
  const userLeader = userId
    .map((id) => {
      return {
        ...users[id],
        answeredQuestions: Object.keys(users[id].answers).length,
        createdQuestions: users[id].questions.length,
        score:
          Object.keys(users[id].answers).length + users[id].questions.length,
      };
    })
    .sort((a, b) => b.score - a.score);
  console.log(userLeader);
  return {
    userLeader,
    authedUser,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
