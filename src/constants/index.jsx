const constants = {};

const actionConstants = (action) => {
  constants[action] = action;
};

export default constants;

// actions create
actionConstants('TOOL_ACTIVE');
