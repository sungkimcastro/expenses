import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogOut } from "./../actions/auth";

export const Header = ({ startLogOut }) => (
  <nav className="navbar navbar-expand-lg py-lg-3">
    <div className="container">
      <ul className="navbar-nav mr-auto align-items-center">
        <li className="nav-item mx-lg-1">
          <NavLink className="nav-link text-light" to="/dashboard">
            Home
          </NavLink>
        </li>
      </ul>
      <a
        className="btn btn-sm btn-light btn-rounded d-none d-lg-inline-flex"
        onClick={startLogOut}
      >
        Logout
      </a>
    </div>
  </nav>
);

const mapToDispatch = dispatch => {
  return {
    startLogOut: () => dispatch(startLogOut())
  };
};

export default connect(undefined, mapToDispatch)(Header);
