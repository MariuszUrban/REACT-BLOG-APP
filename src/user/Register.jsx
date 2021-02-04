import React, { useState, useContext } from "react";
import { StateContext } from "../context";
export default function Register() {
  const { dispatch } = useContext(StateContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordRepeat = (e) => {
    setPasswordRepeat(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "REGISTER", userName });
      }}
    >
      <label htmlFor="register-username">Username:</label>
      <input
        type="text"
        name="register-username"
        id="register-username"
        onChange={handleUserName}
      />
      <label htmlFor="register-password">Password:</label>
      <input
        type="password"
        name="register-password"
        id="register-password"
        value={password}
        onChange={handlePassword}
      />
      <label htmlFor="register-password-repeat">Repeat password:</label>
      <input
        type="password"
        name="register-password-repeat"
        id="register-password-repeat"
        value={passwordRepeat}
        onChange={handlePasswordRepeat}
      />
      <input
        type="submit"
        value="Register"
        disabled={
          userName === 0 || password.length === 0 || password !== passwordRepeat
        }
      />
    </form>
  );
}
