import * as actionTypes from './../../types';

const INITIAL_STATE = {
  isFetchingMembers: false,
  members: [],
};

const memberReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.MEMBER_FETCH_REQUESTED:
      return { ...state, isFetchingMembers: true };
    case actionTypes.MEMBER_FETCH_RECEIVED:
      return { ...state, isFetchingMembers: false, members: action.payload };
    case actionTypes.MEMBER_FETCH_FAILED:
      return { ...state, isFetchingMembers: false };

    default:
      return state;
  }
};

export default memberReducer;
