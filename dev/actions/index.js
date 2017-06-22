export const loadDataAction = (data) => {
  return {
    type: 'DATA_LOADED',
    payload: data
  };
};
export const showLoader = () => {
  return {
    type: 'SHOW_LOADER'
  };
};
export const hideLoader = () => {
  return {
    type: 'HIDE_LOADER'
  };
};
