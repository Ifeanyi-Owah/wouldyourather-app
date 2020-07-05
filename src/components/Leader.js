import React, { Component } from "react";
import { connect } from "react-redux";

class Leader extends Component {
  render() {
    const {
      name,
      answeredQuestions,
      createdQuestions,
      avatarUrl,
      score,
    } = this.props;
    console.log(answeredQuestions, createdQuestions);

    return (
      <li className="list-group-item shadow pt-3 pb-3 mb-5 bg-white rounded card">
        <div className="d-flex">
          <img
            className="rounded-circle w-25 ml-2 mr-2"
            src={avatarUrl}
            alt={`Avatar of ${name}`}
          />
          <div className="mr-5">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">{name}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Anwered questions</td>
                  {/* <td>Otto</td> */}
                  <td>{answeredQuestions}</td>
                </tr>
                <tr>
                  <td>Created questions</td>
                  {/* <td>Thornton</td> */}
                  <td>{createdQuestions}</td>
                </tr>
              </tbody>
            </table>
            {/* <h2>{user.name}</h2>
            <p>{`Anwered questions${answeredQuestions}`}</p>
            <p>{`Created questions${createdQuestions}`}</p> */}
          </div>
          <div className="card ml-5">
            {/* <h3 className="card-header">Score</h3>
            <div className="btn rounded-circle bg-success">
              {answeredQuestions + createdQuestions}
            </div> */}
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* <td>Otto</td> */}
                  <td>{score}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </li>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(Leader);
