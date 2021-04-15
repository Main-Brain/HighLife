import { combineReducers } from 'redux';
import authentication from './authentication';
import topic from './topic';

export default combineReducers({
  authentication,
  topic,
});
