import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component {
  state = { authedUserId: "", isAuthenticated: this.props.authenticate };

  handleChange = (event) => {
    this.setState(
      { authedUserId: event.target.value },
      console.log(this.state.authedUserId)
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state.authedUserId);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>
            <select
              value={this.state.authedUserId}
              className="form-control"
              onChange={this.handleChange}
            >
              <option>Select One</option>
              <option value="sarahedo">Sarah Edo</option>
              <option value="tylermcginnis">Tyler McGinnis</option>
              <option value="johndoe">John Doe</option>
            </select>
          </label>
          <input
            type="submit"
            value="Submit"
            onClick={() => this.props.setAuthedUser(this.state.authedUserId)}
          />
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthedUser: (id) => dispatch({ type: "SET_AUTHED_USER", id }),
  };
};

export default connect(null, mapDispatchToProps)(Login);
