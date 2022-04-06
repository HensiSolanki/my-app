import React,{Navigate} from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthorized = JSON.parse(localStorage.getItem('LoginUser'));

  return (
      <>
    <Route {...rest} render={props => isAuthorized ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
      </>
  )
}
