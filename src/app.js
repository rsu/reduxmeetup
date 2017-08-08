import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import 'rxjs';

import rootEpic from './epics';
import rootReducer from './reducers';

import MeetupContainer from './meetup/meetupContainer';

const logger = createLogger({ predicate: () => __DEV__ });
const epicMiddleware = createEpicMiddleware(rootEpic);
const middleware = applyMiddleware(logger, epicMiddleware);
const store = createStore(rootReducer, {}, compose(middleware));

const App = () => (
  <Provider store={store}>
    <MeetupContainer />
  </Provider>
);

export default App;