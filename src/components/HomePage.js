import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class HomePage extends Component {
  static defaultProps = {
    questionsRank: ["Uanswered Questions", "Answered Questions"],
  };
  state = {
    question: "unanswered",
    color: "black",
  };

  handleClick = (rank) => {
    if (rank === "Answered Questions") {
      this.setState({
        question: "answered",
        color: "text-success",
      });
    } else {
      this.setState({
        question: "unanswered",
        color: "text-success",
      });
    }
  };

  render() {
    const { users, authedUser, questionId } = this.props;
    const answered = Object.keys(users[authedUser].answers);
    const unanswered = questionId.filter(
      (question, i) => !questionId.includes(answered[i])
    );
    console.log(authedUser);
    return (
      <div
        className="mt-4"
        style={{ outline: "1px solid blue", width: "600px", margin: "0 auto" }}
      >
        {this.props.questionsRank.map((r) => (
          <button
            className={`btn btn-light border border-right w-50 font-weight-bold ${this.state.color}`}
            onClick={() => this.handleClick(r)}
          >
            {r}
          </button>
        ))}
        <ul className="list-group mt-0 card p-3">
          {this.state.question === "unanswered"
            ? unanswered.map((question) => (
                <Question id={question} key={question} />
              ))
            : answered.map((answer) => <Question id={answer} key={answer} />)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    questionId: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    users,
    authedUser,
  };
}

export default connect(mapStateToProps)(HomePage);
