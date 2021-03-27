import { RECEIVE_TASKS, RECEIVE_TASK, DELETE_TASK } from "../actions/task_actions";

const TasksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_TASKS:
      newState = Object.assign({}, oldState, action.tasks);
      return newState;
    case RECEIVE_TASK:
      newState = action.task;
      return newState;
    // case DELETE_TASK: 
    default: 
      return oldState;
  }
}