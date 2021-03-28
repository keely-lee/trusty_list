import * as ListAPIUtil from '../util/lists_api_util';

export const RECEIVE_LISTS = "RECEIVE_LISTS";
export const RECEIVE_LIST = "RECEIVE_LIST";
export const RECEIVE_LIST_ERRORS = "RECEIVE_LIST_ERRORS"
export const CLEAR_LIST = "CLEAR_LIST";

export const receiveLists = lists => {
  return {
    type: RECEIVE_LISTS,
    lists
  }
}

export const receiveList = list => {
  return {
    type: RECEIVE_LIST,
    list
  }
}

export const receiveListErrors = errors => {
  return {
    type: RECEIVE_LIST_ERRORS,
    errors
  }
}

export const clearList = () => {
  return {
    type: CLEAR_LIST
  }
}


export const getLists = () => dispatch => {
  return ListAPIUtil.showLists()
    .then(lists => dispatch(receiveLists(lists)))
    .fail(err => dispatch(receiveListErrors(err.responseJSON)))
}

export const getList = listId => dispatch => {
  return ListAPIUtil.showList(listId)
    .then(list => dispatch(receiveList(list)))
    .fail(err => dispatch(receiveListErrors(err.responseJSON)))
}

export const createList = list => dispatch => {
  return ListAPIUtil.createList(list)
    .then(list => dispatch(receiveList(list)))
    .fail(err => dispatch(receiveListErrors(err.responseJSON)))
}

export const updateList = list => dispatch => {
  return ListAPIUtil.editList(list)
    .then(list => dispatch(receiveList(list)))
    .fail(err => dispatch(receiveListErrors(err.responseJSON)))

}

export const deleteList = listId => dispatch => {
  return ListAPIUtil.deleteList(listId)
    .then(() => dispatch(clearList()))
    .fail(err => dispatch(receiveListErrors(err)))
}