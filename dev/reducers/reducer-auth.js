const initialState = {};

export default (state=initialState, action) => {
  switch(action.type) {
    case 'LOGIN_OAUTH': {
      const obj = {};
      obj['oauth' + action.payload.day] = action.payload.data;
      const newState = Object.assign({}, state, obj);
      return newState;
    }
  }
  return state;
};
