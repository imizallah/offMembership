import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import { isAuthGuardActive } from 'constants/defaultValues';
/* eslint-disable camelcase */
import jwt_decode from "jwt-decode";

import setAuthToken from './setAuthToken';

import { getCurrentUser } from './Utils';



const ProtectedRoute = ({
  component: Component,
  // roles = undefined,
  // currentUser,
  setCurrentUserAction,
  ...rest
}) => {
  const setComponent = (props) => {
    // console.log(currentUser);
    if (isAuthGuardActive) {
      const currentUser = getCurrentUser();
      console.log(currentUser);
      if (currentUser) {
        // setCurrentUserAction(currentUser);
        // if (roles) {
        //   if (roles.includes(currentUser.role)) {
        //     return <Component {...props} />;
        //   }
        //   return (
        //     <Redirect
        //       to={{
        //         pathname: '/unauthorized',
        //         state: { from: props.location },
        //       }}
        //     />
        //   );
        // }
        const decode = jwt_decode(localStorage.getItem('taskrUserToken'))
        setAuthToken(localStorage.getItem('taskrUserToken'));
        console.log(decode);
        return <Component {...props} />;
      }
      return (
        <Redirect
          to={{
            pathname: '/auth/login',
            state: { from: props.location },
          }}
        />
      );
    }
    return <Component {...props} />;
  };

  return <Route {...rest} render={setComponent} />;
};

// eslint-disable-next-line import/prefer-default-export


export default ProtectedRoute;
