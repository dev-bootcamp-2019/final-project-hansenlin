import { FETCH_LEAGUE } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_LEAGUE:
      return action.payload;
    default:
      return state;
  }
};