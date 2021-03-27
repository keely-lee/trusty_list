import { combineReducers } from 'redux';
import ListsReducer from './lists_reducer';
import UsersReducer from './users_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  lists: ListsReducer,
});

export default EntitiesReducer;