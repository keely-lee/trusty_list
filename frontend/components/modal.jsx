import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../actions/modal_actions';
// import { createTask, updateTask, clearTask } from '../actions/task_actions';
import TaskForm from './task_form';

function Modal({task}) {
  const dispatch = useDispatch();
  const modalState = useSelector(state => state.modal);

  if (!modalState) return null;

  let component;
  switch (modalState) {
    case "task":
      component = <TaskForm task={task}/>;
      break;
    default:
      component = null;
  }

  return (
    <div className="modal-background-main" onClick={() => dispatch(closeModal())}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  )
}

export default Modal;
