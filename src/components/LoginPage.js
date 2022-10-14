import { useState } from "react";
import { auth } from "../Firebase";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInHandler = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => alert("Welcome " + email + " 😃 You are Logged In !!"))
      .catch((error) => alert("User Not Found "));

    setEmail("");
    setPassword("");
  };

  const SignUpHandler = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => alert(email + " is Registered 😃."))
      .catch((error) => console.error(error));

    setEmail("");
    setPassword("");
  };

  return (
    <div className="container w-25 p-4 form-control">
      <h1 className="text-center">SignIn </h1>
      <div className="form ">
        <label>E-Mail: </label>
        <input
          className="w-100 p-1"
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
          value={email}
        />
        
        <label>Password:</label>
        <input
          className="w-100 p-1"
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div className="p-1 m-1">
          <button
            className="w-100 m-1 p-2 h5 rounded border border-primary text-primary "
            onClick={signInHandler}
          >
            SignIn
          </button>
          <span className="p-2 text-center">Didn't Have Account ! SignUp?</span>
          <button
            className="btn btn-primary w-100 m-1 p-2 border-0 rounded "
            onClick={SignUpHandler}
          >
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
