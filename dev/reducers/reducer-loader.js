const initialState = {
  display: 'none'
};

export default (state=initialState, action) => {
  switch(action.type) {
    case 'SHOW_LOADER': {
      const newState = Object.assign({}, state, {
        display: 'inline'
      });
      return newState;
    }
    case 'HIDE_LOADER': {
      const newState = Object.assign({}, state, {
        display: 'none'
      });
      return newState;
    }
  }
  return state;
};
