import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class HomePage extends Component {
  static defaultProps = {
    questionsRank: ["Uanswered Questions", "Answered Questions"],
  };
  state = {
    question: "unanswered",
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

    return (
      <div
        className="mt-4"
        style={{ outline: "1px solid blue", width: "600px", margin: "0 auto" }}
      >
        {this.props.questionsRank.map((r) => (
          // <input
          //   className="btn btn-light border border-right w-50 text-success font-weight-bold"
          //   value={r}
          //   name={r}
          //   onClick={this.handleClick}
          // />
          <button
            className={`btn btn-light border border-right w-50 font-weight-bold1 ${this.state.color}`}
            onClick={() => this.handleClick(r)}
          >
            {r}
          </button>
        ))}
        {/* <button
          className="btn btn-light border border-right w-50 text-success font-weight-bold"
          onClick={this.handleClick}
        >
          Unaswered Questions
        </button>
        <button
          className="btn btn-white border border-left w-50 font-weight-bold"
          onClick={this.handleAnswered}
        >
          Answered Questions
        </button> */}
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
