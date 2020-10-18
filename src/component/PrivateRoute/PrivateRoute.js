import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {  newUser } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const {loggedInUser, setLoggedInUser} = useContext(newUser)
    const getEmail = sessionStorage.getItem("userEmail");
    return (
        <Route
          {...rest}
          render={({ location }) =>
          loggedInUser.email || getEmail ? ( 
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
};

export default PrivateRoute;