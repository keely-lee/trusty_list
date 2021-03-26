import { combineReducers } from 'redux';
import EntitiesReducer from './entities_reducer';
import ErrorsReducer from './errors_reducer';
import ModalReducer from './modal_reducer';
import SessionReducer from './session_reducer';

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  errors: ErrorsReducer,
  modal: ModalReducer,
})

export default RootReducer;