import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = { authedUserId: "", login: false };

  handleChange = (event) => {
    this.setState({ authedUserId: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      login: true,
    });
  };

  render() {
    const { login } = this.state;
    if (login === true) {
      return <Redirect to="/home" />;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        {/* <div className="form-group"> */}
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
        {/* </div> */}
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
