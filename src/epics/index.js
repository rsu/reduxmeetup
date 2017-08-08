import { combineEpics } from 'redux-observable';

import memberFetchRequestEpic from './member/memberFetchRequestEpic';

const epics = [
  memberFetchRequestEpic
];

const rootEpic = combineEpics(...epics);

export default rootEpic;