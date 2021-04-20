import { combineReducers } from 'redux';
import authentication from './authentication';
import topic from './topic';
import board from './board';

export default combineReducers({
  authentication,
  topic,
  board,
});
