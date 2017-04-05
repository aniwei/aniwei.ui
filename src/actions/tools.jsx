import constants from '../constants';

export function toolActive (tool) {
  return {
    type: constants.TOOL_ACTIVE,
    tool
  };
}