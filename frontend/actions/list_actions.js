import * as ListAPIUtil from '../util/lists_api_util';

export const RECEIVE_LISTS = "RECEIVE_LISTS";
export const RECEIVE_LIST = "RECEIVE_LIST";
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

export const clearList = () => {
  return {
    type: CLEAR_LIST,
  }
}


export const getLists = () => dispatch => {
  return ListAPIUtil.showLists()
    .then(lists => dispatch(receiveLists(lists)))
    // .fail(err => dispatch(receiveErrors(err)))
}

export const getList = listId => dispatch => {
  return ListAPIUtil.showList(listId)
    .then(list => dispatch(receiveList(list)))
    // .fail
}

export const createList = list => dispatch => {
  return ListAPIUtil.createList(list)
    .then(list => dispatch(receiveList(list)))
}

export const updateList = list => dispatch => {
  return ListAPIUtil.editList(list)
    .then(list => dispatch(receiveList(list)))
}

export const deleteList = listId => dispatch => {
  return ListAPIUtil.deleteList(listId)
    .then(() => dispatch(clearList()))
}