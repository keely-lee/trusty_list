import * as TaskAPIUtil from '../util/tasks_api_util';
import { receiveListErrors, receiveList} from './list_actions';

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
    .then(list => dispatch(receiveList(list)))
    .fail(err => dispatch(receiveListErrors(err.responseJSON)))
}
export const updateTask = task => dispatch => {
  return TaskAPIUtil.updateTask(task)
    .then(list => dispatch(receiveList(list)))
    .fail(err => dispatch(receiveListErrors(err.responseJSON)))
}

export const clearTask = taskId => dispatch => {
  return TaskAPIUtil.deleteTask(taskId)
    .then(list => dispatch(receiveList(list)))
    .fail(err => dispatch(receiveListErrors(err)))
} //////

