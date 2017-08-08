import { Observable } from 'rxjs/Observable';
import { ajax } from 'rxjs/observable/dom/ajax';

import * as actionTypes from './../../types';

const memberUrl = 'https://api.meetup.com/Auckland-React-Native-Meetup/members?key=';

const memberFetchRequestEpic = (action$, store) => (
  action$
    .ofType(actionTypes.MEMBER_FETCH_REQUESTED)
    .mergeMap(() => {
      return ajax.get(memberUrl).map((xhr) => {
        return {
          type: actionTypes.MEMBER_FETCH_RECEIVED,
          payload: xhr.response
        };
      }).catch(() => {
        return Observable.of({
          type: actionTypes.MEMBER_FETCH_FAILED,
        });
      });
    })
);

export default memberFetchRequestEpic;
