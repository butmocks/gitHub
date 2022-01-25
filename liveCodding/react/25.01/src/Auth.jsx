import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';


const Auth = props => {
  // isLoggedIn: boolean
  // isLoggedOut: boolean


  return (
    <>
      <Login></Login>
      <Logout></Logout>
      <Spinner></Spinner>
    </>
  );
};

export default Auth;
