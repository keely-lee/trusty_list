import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask, updateTask, clearTask } from '../actions/task_actions';


function TaskForm({edit, listId}) { //need listID??
  const dispatch = useDispatch();
  const [title, updateTitle] = edit ? useState(edit.title) : useState("");
  const [status, updateStatus] = edit ? useState(edit.status) : useState("I");
  const [description, updateDescription] = edit ? useState(edit.description) : useState("")
  const [comments, updateComments] = edit ? useState(edit.comments) : useState([]);
  // const [dueDate, updateDueDate] = useState(""); eventually get date calcs

  console.log(listId)
  console.log("listId in taskform")

  function handleSubmit(e) {
    e.preventDefault();

    debugger

    const currTask = {
      title: title,
      status: status,
      description: description,
      comments: comments,
      list_id: listId
    }

    debugger
    if (edit) {
      currTask[id] = edit.id;
      dispatch(updateTask(currTask))
    } else {
      dispatch(createTask(currTask))
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