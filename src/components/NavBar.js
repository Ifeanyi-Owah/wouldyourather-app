import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const navlinks = ["add", "leaderboard"];

class NavBar extends Component {
  render() {
    const navLink = navlinks.map((link) => {
      return (
        <li key={link}>
          <NavLink exact to={`/${link}`} className="nav-link" key={link}>
            {link}
          </NavLink>
        </li>
      );
    });
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <NavLink exact to="/" className="navbar-brand">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink exact to="/" className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              {navLink}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
