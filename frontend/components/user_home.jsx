import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/session_actions';
import { getLists, getList, createList, updateList, deleteList } from '../actions/list_actions';

function UserHome(){
  const dispatch = useDispatch();
  const lists = useSelector(state => state.entities.lists);

  useEffect(() => {
    console.log("on mount grab lists")
    dispatch(getLists())
  }, []);

  return (
    <div className="user-main">
      <nav>
        <button onClick={() => dispatch(logout())}>LOGOUT</button>
      </nav>

      <h1>LIST COMPONENT</h1>
    </div>
  )
}

export default UserHome;