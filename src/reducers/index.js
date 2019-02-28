import { combineReducers } from 'redux';

import entities from './lib/entities.reducer';
import loading from './lib/loading.reducer';

export default combineReducers({
  entities,
  loading
});