import { clone } from 'lodash';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'


import constants from '../constants';
import tools from './tools';
import tabs from './tabs';

export default combineReducers({
  tools,
  tabs,
  routing: routerReducer
});