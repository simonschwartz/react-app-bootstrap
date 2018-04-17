import { combineReducers } from 'redux';
import fetchData from './fetchData';
import responseErrors from './responseErrors';

const rootReducer = combineReducers({
  data: fetchData,
  error: responseErrors
});

export default rootReducer;
