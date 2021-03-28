import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

// this reducer keeps track of current_user
const _nullSession = {
  currentUserId: null,
}

const SessionReducer = (oldState = _nullSession, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState["currentUserId"] = action.current_user.id;
      return newState;
    case LOGOUT_CURRENT_USER:
      // newState["currentUserId"] = null;
      // return newState;
      return _nullSession;
    default:
      return oldState;
  }
}

export default SessionReducer;