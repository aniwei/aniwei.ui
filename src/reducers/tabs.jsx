import { clone } from 'lodash';

import constants from '../constants';

export default function tabs (state = [], action) {
  switch (action.type) {
    case constants.TAB_PUSH:
      state.push(action.tool);

      return clone(state);
    default:
      return state;
  }
}