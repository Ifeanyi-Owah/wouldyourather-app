import React, { Component } from "react";
import { connect } from "react-redux";
import Leader from "./Leader";

class LeaderBoard extends Component {
  render() {
    return (
      <div style={{ width: "700px", margin: "0 auto" }}>
        <ul className="list-group mt-2 p-3">
          {this.props.userId.map((id) => (
            <Leader id={id} key={id} />
          ))}
          {/* <Leader />
        <Leader />
        <Leader /> */}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    userId: Object.keys(users),
  };
}

export default connect(mapStateToProps)(LeaderBoard);
