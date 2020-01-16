import React from "react";
import { connect } from "react-redux";
import { startLogin } from "./../actions/auth";

export const Login = ({ startLogin }) => {
  return (
    <div className="auth-fluid">
      <div className="auth-fluid-form-box">
        <div className="align-items-center d-flex h-100">
          <div className="card-body">
            <h4 className="card-title">Start controlling your expenses</h4>
            <p className="text-muted mb-4">
              Understand your financial habits and make changes to them. It can
              help you realize when you need to stop spending,
            </p>
            <button className="btn btn-danger" onClick={startLogin}>
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapToDispatch = dispatch => {
  return {
    startLogin: () => dispatch(startLogin())
  };
};

export default connect(undefined, mapToDispatch)(Login);
