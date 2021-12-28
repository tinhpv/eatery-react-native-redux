import yelp from '../../api/yelp';

export const fetchBusinesses = term => async dispatch => {
  const response = await yelp.get('/search', {
    params: {
      term,
      limit: 50,
      location: 'USA',
    },
  });
  dispatch({type: 'FETCH_BUSINESSES', payload: response.data});
};
