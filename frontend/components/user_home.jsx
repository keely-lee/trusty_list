import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/session_actions';
import { getLists, getList, updateList, deleteList } from '../actions/list_actions';
import { openModal } from '../actions/modal_actions';

function UserHome(){
  const dispatch = useDispatch();
  const lists = useSelector(state => state.entities.lists);
  // const listIds = Object.keys(lists);
  // let listIds = !!Object.keys(lists) ? useState(Object.keys(lists)) : useState([]);
  const [listIds, setListIds] = !!Object.keys(lists) ? useState(Object.keys(lists)) : useState([]);
  // const [list, setList] = useState({});
  console.log(lists)
  console.log("listIds")

  useEffect(() => {
    console.log("IN USER HOME")
    dispatch(getLists());
  }, []);

  useEffect(() => {
    // debugger
    // listIds = Object.keys(lists);

    setListIds(Object.keys(lists));
  }, [lists])

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
        { Object.keys(lists).length ? Object.keys(lists).map(id => {
        // { listIds.length && Object.keys(lists).length === listIds.length ? listIds.map(id => {
          // debugger
        // { listIds.length ? listIds.map(id => {
          return (
            <Link to={`/lists/${id}`} key={`list-${id}`}>
              <div className={`list-ele-${id}`}>
                <p>{lists[id].name}</p>
                <ul>
                  { lists[id].tasks.map((task, idx) => {
                    return ( 
                      <li key={idx}>{task.title}</li> 
                    )
                  }) }
                </ul>
              </div>
            </Link>
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