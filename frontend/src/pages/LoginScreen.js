import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { signin } from "../actions/userActions";

export default function LoginScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const dispatch = useDispatch();

  const submitHandler = (e) => {
    // e.preventDefault();
    console.log(email);
    if(email=='ahmed@gmail.com' || email=='ali@gmail.com'){
      localStorage.setItem('signedIn', 'true');
      localStorage.setItem('userRoom', 'room');
      localStorage.setItem('userEmail', email);
      // <Redirect to="/main" />
      props.history.push('/');

    }

    // dispatch(signin(email, password));
  };

  return (
    <div>
      <form className="form">
        <div>
          <h1>Login</h1>
        </div>

        <div>
          <label htmlFor="email">Email Address </label>
          <input
            type="email"
            id="email"
            placeholder="Please Enter Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="password">Password </label>
          <input
            type="password"
            id="password"
            placeholder="Please Enter Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <div>
          <label />{" "}
          <button onClick={submitHandler} className="primary">
            Log In{" "}
          </button>
        </div>

        <div>
          <label />
          <div>
            New User ?{""}
            <Link to="registration">Create New Account</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
