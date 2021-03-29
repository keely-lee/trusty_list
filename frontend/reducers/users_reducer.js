import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../actions/session_actions";

const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = action.current_user;
      return newState;
    case LOGOUT_CURRENT_USER: 
      return {}; 
    default:
      return oldState;
  }
}

export default UsersReducer;