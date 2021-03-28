import { RECEIVE_LISTS, RECEIVE_LIST, RECEIVE_LIST_ERRORS, CLEAR_LIST } from '../actions/list_actions';
import { CLOSE_MODAL } from '../actions/modal_actions';


const listErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  let newState = [];

  switch(action.type) {
    case RECEIVE_LIST_ERRORS:
      newState = Object.assign([], oldState, action.errors) //is not copied like {}, will replace by size
      return newState;
    case RECEIVE_LISTS:
      return newState;
    case RECEIVE_LIST: 
      return newState;
    case CLOSE_MODAL:
      return newState;
    default:
      return oldState
  }

}

export default listErrorsReducer;