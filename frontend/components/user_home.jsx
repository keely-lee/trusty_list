import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/session_actions';
import { getLists, getList, createList, updateList, deleteList } from '../actions/list_actions';
import { openModal } from '../actions/modal_actions';

function UserHome(){
  const dispatch = useDispatch();
  const lists = useSelector(state => state.entities.lists);
  const listIds = Object.keys(lists);
  const [list, setList] = useState({});

  useEffect(() => {
    console.log("on mount grab lists")
    dispatch(getLists())
  }, []);


  // function taskNames(arr) {
  //   if (arr.length <= 5) return arr.map(task => task.title);
    
  //   let names = [];
  //   for (let i = 0; i < 4; i++) {
  //     names.push(arr[i].name);
  //   }
  // }

  return (
    <div className="user-main">
      <nav>
        <button onClick={() => dispatch(logout())}>LOGOUT</button>
      </nav>

      <h1>Trust Your Lists</h1>

      <div className="user-wrapper">
        { listIds.length ? listIds.map(id => {
          return (
            <div className={`list-ele-${id}`} key={`list-${id}`}>
              <p>{lists[id].name}</p>
              <ul>
                { lists[id].tasks.map((task, idx) => {
                  return ( 
                    <li key={idx}>{task.title}</li> 
                  )
                }) }
              </ul>

            </div>
          )
        }) : null }

        <div className="list-ele-new" onClick={() => dispatch(openModal("newList"))}>
          <p>New List</p>
        </div>
      </div>
    </div>
  )
}

export default UserHome;