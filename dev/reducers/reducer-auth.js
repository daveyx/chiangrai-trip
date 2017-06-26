const initialState = null;

export default (state=initialState, action) => {
  switch(action.type) {
    case 'LOGIN_OAUTH': {
      const newState = Object.assign({}, state, {
        oauth: action.payload
      });
      return newState;
    }
  }
  return state;
};
