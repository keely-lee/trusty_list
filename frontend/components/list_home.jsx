import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getList, updateList, deleteList } from '../actions/list_actions';
import { createTask, updateTask, clearTask } from '../actions/task_actions';

import TaskForm from './task_form';
import { openModal } from '../actions/modal_actions';
// import Modal from './modal';

function List(props) {
  const dispatch = useDispatch();
  const { match } = props;
  const list = useSelector(state => state.entities.lists);
  const listErrors = useSelector(state => state.errors.list);

  const listObj = Object.keys(list).length === 1 ? list[Object.keys(list)[0]] : null;
  const [listName, updateListName] = listObj ? useState(listObj.name) : useState("");

  useEffect(() => {
    dispatch(getList(match.params.id))
      .then(res => updateListName(Object.values(res.list)[0].name))
  }, [])

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  function saveList(e){
    e.preventDefault();

    let updatedList = Object.assign({}, listObj);
    updatedList['name'] = listName;

    dispatch(updateList(updatedList));
  }

  function markComplete(task) {
  }

  function trashList() {
    if (confirm("Delete List?")) {
      dispatch(deleteList(match.params.id));
    } 
  }

  return (
    <div className="list-main">
      <Link to="/">Return to Lists</Link>
      <button type="button" onClick={trashList}>Delete List</button>

      { listObj ? ( 
        <div className="list-main-wrapper">
          <form onSubmit={saveList}>
            <input type="text"
              value={listName}
              onChange={(e) => updateListName(e.currentTarget.value)}
              className="list-name"
            />

            <button>Save</button>
            {/* FIGURE OUT HOW TO TRIGGER SAVE FOR ALL (NOT INDIVIDUAL TAKSS LATER - CAUSING CONFUSION) */}
          </form>

          <div className="list-task-wrapper">
            { listObj.tasks.map((task, idx) => {
              return (
                <TaskForm edit={task} listId={match.params.id} key={`task-${idx}`}/>
              )
            }) }

            <button type="button" onClick={() => dispatch(openModal('task'))}>
              New Task
            </button> 
          </div>
        </div>

      ) : "List Does Not Exist" }
      {/* Add redirect later if list does not exist */}

    </div>
  )
}

export default List;