import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTask, updateTask, clearTask } from '../actions/task_actions';
import { closeModal } from '../actions/modal_actions';

function TaskForm({edit, listId}) { //need listID??
  const dispatch = useDispatch();
  const list = useSelector(state => state.entities.lists);
  // const errors = useSelector(state => state.errors.list);

  const [title, updateTitle] = !!edit ? useState(edit.title) : useState("");
  const [status, updateStatus] = edit ? useState(edit.status) : useState("I");
  const [description, updateDescription] = edit ? useState(edit.description) : useState("")
  const [comments, updateComments] = edit ? useState(edit.comments) : useState([]);
  const [newComment, updateNewComment] = useState(""); 
  const [editMode, toggleEditMode] = useState(null);  //idx
  // const [dueDate, updateDueDate] = useState(""); eventually get date calcs

  useEffect(() => {
    if (!!edit) {
      updateTitle(edit.title)
      updateStatus(edit.status)
      updateDescription(edit.description)
      updateComments(edit.comments)
    }
  }, [edit])

  function _delComment(idx) {
    if (idx === comments.length-1) {
      updateComments(oldComments => {
        oldComments.pop();
        return [...oldComments];
      })
    } else {
      updateComments(oldComments => {
        oldComments[idx] = oldComments.pop();
        return [...oldComments];
      })
    }

  }

  function _updateComment(comment, idx) {
    updateComments(oldComments => {
      oldComments[idx] = comment;
      return [...oldComments]
    })
  }

  function _newComment(comment) {
    updateComments(oldComments => {
      oldComments.push(comment);
      return [...oldComments];
    })
    updateNewComment("");
  }

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

        <div>
          <span>Task: </span>
          <input onChange={e => updateTitle(e.currentTarget.value)} value={title} />
        </div>
        {/* <div> */}
          {/* <span>Description: </span> */}
          <textarea onChange={e => updateDescription(e.currentTarget.value)} value={description} placeholder="Description"/>
        {/* </div> */}

        <span>Comments: </span>
        <ul className="task-comments-list">
          {comments.map((comment, idx) => {
            // return (
            //   <div key={`comment-${idx}`}>
            //     <li >{comment}</li>
            //     <div>
            //       <button type="button" onClick={() => _updateComment(idx)}>Edit</button>
            //       <button type="button" onClick={() => _delComment(idx)}>Del</button>
            //     </div>
            //   </div>
            // )


            return (
              <div key={`comment-${idx}`} 
                onClick={() => toggleEditMode(idx)}
                // onBlur={() => toggleEditMode(null)} 
              >
                
                { editMode === idx ? (
                  <input type="text"
                    value={comment}
                    onChange={(e) => _updateComment(e.currentTarget.value, idx)}/>
                ) : (
                  <li>{comment}</li>
                )}

                <button type="button" onClick={() => _delComment(idx)}>Del</button>
              </div>
            )
          })}
        </ul>

        <div className="add-comment-input">
          <input type="text"
            placeholder="Add Comment"
            onChange={e => updateNewComment(e.currentTarget.value)}
            value={newComment}
          />
          <button type="button" onClick={() => _newComment(newComment)}>Add</button>
        </div>

        {/* <button id="add-comment" type="button" onClick={() => _newComment("")}>Add Comment</button> */}
        <div className="task-save-del-buttons">
          { edit ? <button type="button" onClick={() => dispatch(clearTask(edit.id))}>Delete Task</button> : null }
          <button>Save!</button>
        </div>
      </form>

    </div>
  )



}

export default TaskForm;