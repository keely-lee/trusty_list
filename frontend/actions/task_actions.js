import * as TaskAPIUtil from '../util/tasks_api_util';

export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const RECEIVE_TASK = "RECEIVE_TASK";
export const DELETE_TASK = "DELETE_TASK";

export const receiveTasks = tasks => {
  return {
    type: RECEIVE_TASKS,
    tasks
  }
}

export const receiveTask = task => {
  return {
    type: RECEIVE_TASK,
    task
  }
}

export const deleteTask = () => {
  return {
    type: DELETE_TASK
  }
}


export const getTasks = () => dispatch => {
  return TaskAPIUtil.showTasks()
    .then(tasks => dispatch(receiveTasks(tasks)))
    // .fail
}

export const getTask = taskId => dispatch => {
  return TaskAPIUtil.showTask(taskId)
    .then(task => dispatch(receiveTask(task)))
}

export const createTask = task => dispatch => {
  return TaskAPIUtil.createTask(task)
    .then(task => dispatch(receiveTask(task)))
}
export const updateTask = task => dispatch => {
  return TaskAPIUtil.updateTask(task)
    .then(task => dispatch(receiveTask(task)))
}

export const clearTask = taskId => dispatch => {
  return TaskAPIUtil.deleteTask(taskId)
    .then(() => dispatch(deleteTask()))
} //////

