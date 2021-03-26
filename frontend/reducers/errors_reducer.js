import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
// task errors
// list errors

const ErrorsReducer = combineReducers({
  session: sessionErrorsReducer
});

export default ErrorsReducer;