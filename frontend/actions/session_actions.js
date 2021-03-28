import * as APIUtil from '../util/session_api_util';
import { clearList } from './list_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    current_user: user
  }
}

export const logoutUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  }
}

export const receiveErrors = (errors) => { 
  return {
    type: RECEIVE_ERRORS,
    errors
  }
}

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
}

export const login = user => dispatch => {
  return APIUtil.loginUser(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
}

export const logout = () => dispatch => {
  return APIUtil.logoutUser()
    .then(() => dispatch(logoutUser()))
    .then(() => dispatch(clearList()))
    .fail(err => dispatch(receiveErrors(err)))
}

export const signup = user => dispatch => {
  return APIUtil.createUser(user)
    .then(user => dispatch(receiveCurrentUser(user))) 
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
} 
