import React from 'react';
import {useSelector} from 'react-redux';
import UserHome from './user_home';
import Session from './session';

function Greeting(){
  const loggedIn = useSelector(state => state.session.currentUserId)
  
  return (
    <div>
      { loggedIn ? <UserHome/> : <Session type="login"/> }
    </div>
  )
}

export default Greeting;