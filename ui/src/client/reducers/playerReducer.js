import { FETCH_PLAYER } from '../actions';

export default (state = "", action) => {
  switch (action.type) {
    case FETCH_PLAYER:
      return action.payload;
    default:
      return state;
  }
};