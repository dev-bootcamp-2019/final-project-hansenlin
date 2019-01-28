import { CREATE_LEAGUE } from '../actions';
import { ADD_PLAYER } from '../actions';
import { DROP_PLAYER } from '../actions';
import { DRAFT_PLAYER } from '../actions';
import { SET_ROSTER } from '../actions';
import { VALIDATE_GAME } from '../actions';
import { FETCH_TRANSACTIONS } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_LEAGUE:
      return [...state, action.payload];
    case ADD_PLAYER:
      return [...state, action.payload];
    case DROP_PLAYER:
      return [...state, action.payload];
    case DRAFT_PLAYER:
      return [...state, action.payload];
    case SET_ROSTER:
      return [...state, action.payload];
    case VALIDATE_GAME:
      return [...state, action.payload];
    case FETCH_TRANSACTIONS:
      return state;
    default:
      return state;
  }
};