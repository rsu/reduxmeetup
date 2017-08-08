import { combineReducers } from 'redux';

import memberReducer from './member/memberReducer';

const rootReducer = combineReducers({
  memberReducer,
});

export default rootReducer;
