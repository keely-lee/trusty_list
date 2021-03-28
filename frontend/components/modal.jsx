import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../actions/modal_actions';
// import { createTask, updateTask, clearTask } from '../actions/task_actions';
import TaskForm from './task_form';
import { NewListModal } from './modal_components';

function Modal({task}) {
  const dispatch = useDispatch();
  const modalState = useSelector(state => state.modal);
  const listErrors = useSelector(state => state.errors.list);

  if (!modalState) return null;

  let component;
  switch (modalState) {
    case "task":
      component = <TaskForm task={task}/>;
      break;
    case "newList":
      component = <NewListModal/>
      break;
    default:
      component = null;
  }

  return (
    <div className="modal-background-main" onClick={() => dispatch(closeModal())}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { listErrors.map((err, idx) => {
          return (
            <p className={`list-error-${idx}`} key={`err-${idx}`}>{err}</p>
          )
        }) }
        { component }
      </div>
    </div>
  )
}

export default Modal;
