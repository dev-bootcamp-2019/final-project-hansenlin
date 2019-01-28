import { FETCH_ACCOUNT } from '../actions';

export default (state = "", action) => {
  switch (action.type) {
    case FETCH_ACCOUNT:
      return action.payload;
    default:
      return state;
  }
};