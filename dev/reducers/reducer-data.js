const initialState = {};

export default (state=initialState, action) => {
  switch(action.type) {
    case 'DATA_LOADED': {
      const obj = {};
      obj['day' + action.payload.day] = action.payload.data;
      const newState = Object.assign({}, state, obj);
      return newState;
    }
  }
  return state;
};
