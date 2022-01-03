export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_BUSINESS_DETAILS':
      return action.payload;
    default:
      return state;
  }
};
