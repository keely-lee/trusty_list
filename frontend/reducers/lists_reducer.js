import { RECEIVE_LISTS, RECEIVE_LIST, CLEAR_LIST } from '../actions/list_actions';

const ListsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_LISTS:
      // newState = action.lists;
      newState = Object.assign({}, oldState, action.lists);
      return newState;
    case RECEIVE_LIST:
      newState = action.list;
      return newState;
    case CLEAR_LIST:
      newState = {};
      return newState;
    default:
      return oldState;
  }
}

export default ListsReducer;