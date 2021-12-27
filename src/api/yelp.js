import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer vLhv3Fw4QPFeJZnU1QkX7OiDlo2YMisRsmWAe1kfqJzS2nPRpbHGcgCjacxt8GgsJBxpGBGzcoOl3gfHjlaEw582Tz71f3bh9iV2NJwkVj2_bnIlDTEdjnb6TuzyYHYx',
  },
});
