import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const AuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return localStorage.getItem('authToken') ? (
          <Component {...props} />
        ) : (
          <Redirect to='signin' />
        );
      }}
    />
  );
};

export default AuthRoute;
