import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Auth from './Auth';

const AuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return Auth.getToken() ? (
          <Component {...props} />
        ) : (
          <Redirect to='signin' />
        );
      }}
    />
  );
};

export default AuthRoute;
