import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({ isAuth, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            component={props => {
                return isAuth ? <Redirect to="/dashboard" /> : <Component {...props} />;
            }}
        />
    );
};

const mapToState = state => {
    return {
        isAuth: !!state.auth.uid
    };
};

export default connect(mapToState)(PublicRoute);
