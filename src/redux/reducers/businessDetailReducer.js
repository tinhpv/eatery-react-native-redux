const initialState = {
  rating: 0,
  categories: [],
  location: {
    display_address: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BUSINESS_DETAILS':
      return action.payload;
    default:
      return state;
  }
};
