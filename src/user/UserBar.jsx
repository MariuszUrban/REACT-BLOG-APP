import React, {useContext} from "react";
import {StateContext} from '../context'
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";


export default function UserBar() {
  const {state} = useContext(StateContext); 
  const {user} = state; 
  if (user) {
    return <Logout />;
  } else {
    return (
      <>
        <Login />
        <Register />
      </>
    );
  }
}
