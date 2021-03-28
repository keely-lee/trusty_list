import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import listErrorsReducer from './list_errors_reducer';
// task errors

const ErrorsReducer = combineReducers({
  session: sessionErrorsReducer,
  list: listErrorsReducer,
});

export default ErrorsReducer;