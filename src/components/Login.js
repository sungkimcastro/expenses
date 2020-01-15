import React from "react";
import { connect } from "react-redux";
import { startLogin } from "./../actions/auth";

export const Login = ({ startLogin }) => {
    return (
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">Expensify app</h1>
                <button className="button" onClick={startLogin}>
                    Login with google
        </button>
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
