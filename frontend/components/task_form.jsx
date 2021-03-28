import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTask, updateTask, clearTask } from '../actions/task_actions';
import { closeModal } from '../actions/modal_actions';

function TaskForm({edit, listId}) { //need listID??
  const dispatch = useDispatch();
  const list = useSelector(state => state.entities.lists);
  // const errors = useSelector(state => state.errors.list);

  const [title, updateTitle] = edit ? useState(edit.title) : useState("");
  const [status, updateStatus] = edit ? useState(edit.status) : useState("I");
  const [description, updateDescription] = edit ? useState(edit.description) : useState("")
  const [comments, updateComments] = edit ? useState(edit.comments) : useState([]);
  // const [dueDate, updateDueDate] = useState(""); eventually get date calcs


  function handleSubmit(e) {
    e.preventDefault();

    const listNum = listId ? listId : Object.keys(list)[0];
    // edit from list home vs new list modal. Prep for home page edit.

    const currTask = {
      title: title,
      status: status,
      description: description,
      comments: comments,
      list_id: listNum
    }
    
    if (edit) {
      currTask['id'] = edit.id;
      dispatch(updateTask(currTask))
    } else {
      dispatch(createTask(currTask))
        .then(() => dispatch(closeModal()))
    }
  }

  return (
    <div className="task-form-div">
      <form onSubmit={handleSubmit}>
        <button type="button" onClick={() => status === "I" ? updateStatus("D") : updateStatus("I")}>
          {status}
        </button>

        <input onChange={e => updateTitle(e.currentTarget.value)} value={title} />
        <input onChange={e => updateDescription(e.currentTarget.value)} value={description} />

        <ul>
          {comments.map((comment, idx) => {
            return (
              <li key={`comment-${idx}`}>{comment}</li>
            )
          })}
        </ul>
        { edit ? <button type="button" onClick={() => dispatch(clearTask(edit.id))}>Delete Task</button> : null }
        <button>Save!</button>
      </form>
    </div>
  )



}

export default TaskForm;