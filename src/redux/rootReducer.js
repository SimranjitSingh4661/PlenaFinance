import {combineReducers} from 'redux';
import AppReducer from './reducers/appReducer';

export default combineReducers({
  appData: AppReducer,
});
