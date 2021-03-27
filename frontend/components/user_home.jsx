import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/session_actions';

function UserHome(){
  const dispatch = useDispatch();
  const lists = useSelector(state => state.entities.lists);

  return (
    <div>
      <h1>LIST COMPONENT</h1>
      <button onClick={() => dispatch(logout())}>LOGOUT</button>
    </div>
  )
}

export default UserHome;