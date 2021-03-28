import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import { createList } from '../actions/list_actions';
import { closeModal } from '../actions/modal_actions';

export const NewListModal = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const error = useSelector(state => state.errors.list);
  const [listName, updateListName] = useState("");
  
  function handleNewList(e) {
    e.preventDefault();
    dispatch(createList({name: listName}))
      .then(res => {
        dispatch(closeModal())
        history.push(`/lists/${Object.keys(res.list)[0]}`)
      })
  }

  return (
    <div className="new-list-modal-div">
      { error.length ? error.map((err, idx) => {
        return (
          <p className={`list-error-${idx}`} key={`err-${idx}`}>{err}</p>
        )
      }) : null}
      
      <form onSubmit={handleNewList}>
        <input type="text" 
        value={listName}
        onChange={e => updateListName(e.currentTarget.value)}
        placeholder="New List Name"/>
        <button>Create</button>
      </form>

    </div>
  )
}

