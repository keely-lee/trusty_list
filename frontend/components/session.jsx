import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, signup } from '../actions/session_actions';

function Session({type}) {

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e){
    e.preventDefault()

    if (type === 'signup') dispatch(signup({email: email, password: password}));
    else dispatch(login({email: email, password: password}));
  }

  // session values
  let submitButton;
  let altButtonText;
  let altButton;
  let pwPlaceholder;

  if (type === login) {
    submitButton = "Sign Up"
    altButtonText = "Already have an account?";
    altButton = "Login";
    pwPlaceholder = "must be a minimum of 6 characters";
  } else {
    submitButton = "Log In"
    altButtonText = "Don't have an account?";
    altButton = "Signup";
    pwPlaceholder = ""
  }

  return (
    <div className="session-main">
      <p>We'll Keep It In Order, Trust Us. </p>
      <h1>TrustyList</h1>
      <form onSubmit={handleSubmit} className={`${type}-session-form`}>
        <p>Your Email</p>
        <input type="text" 
          placeholder="yourname@trustylist.com"
          onChange={e => setEmail(e.currentTarget.value)}
          className={`${type}-session-email`}/>

        <p>Your Password</p>
        <input type="password" 
          placeholder={pwPlaceholder}
          onChange={e => setPassword(e.currentTarget.value)}
          className={`${type}-session-email`}/>

        <button>{submitButton}</button>
        {/* <button onClick={demoUser}>Demo User</button> */}
      </form>
    </div>
  )
}

export default Session;
