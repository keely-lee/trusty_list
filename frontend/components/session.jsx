import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, signup, clearErrors } from '../actions/session_actions';

function Session({sessionType}) {

  const dispatch = useDispatch();
  const errors = useSelector(state => state.errors.session);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState(sessionType);

  // useEffect(() => {
  //   // effect
  //   return () => {
  //     dispatch(clearErrors);
  //   }
  // })

  function handleSubmit(e){
    e.preventDefault()

    if (type === 'signup') dispatch(signup({email: email, password: password}));
    else if (type === 'demo') dispatch(login({email: 'john_dill@gmail.com', password: 'password1'}));
    else dispatch(login({email: email, password: password}));
  }

  function swap(){
    setType(altButton.toLowerCase())
    dispatch(clearErrors())
  }

  // session values
  let submitButton;
  let altButtonText;
  let altButton;
  let pwPlaceholder;

  if (type === 'signup') {
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
      <div className="session-wrapper">
        <h4>We'll Keep It In Order, Trust Us. </h4>
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

          <button className="session-submit">{submitButton}</button>
          <button className="session-alt-button" onClick={() => setType("demo")}>Demo User</button>
          {/* <button onClick={demoUser}>Demo User</button> */}
        </form>

        {/* <div className="session-alt-div"> */}
          <span>{altButtonText}</span>
          <button className="session-alt-button" onClick={swap}>{altButton}</button>
        {/* </div> */}

        { errors.map((err, idx) => {
          return (
            <p className={`session-error-${idx}`} key={`err-${idx}`}>{err}</p>
          )
        }) }
      </div>
    </div>
  )
}

export default Session;
