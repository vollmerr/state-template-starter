import { delay } from 'redux-saga';
import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';
import { api } from 'state-template';

import * as actions from './actions';
import * as C from './constants';

// Handle side effects (API calls, etc) in this file
export function* getExampleData(action) {
  const { page, withDelay, withError } = action.payload;

  try {
    const url = `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=2`;
    const data = yield call(api.requestWithToken, url);
    if (withDelay) {
      yield delay(2000);
    }
    if (withError) {
      throw new Error('Example error from API call');
    }
    yield put(actions.getExampleDataSuccess(data));
  } catch (error) {
    yield put(actions.getExampleDataFailure(error));
  }
}

// export all sagas declared here in the 'all' statement
export default function* homeSaga() {
  yield all([
    takeLatest(C.GET_EXAMPLE_DATA_REQUEST, getExampleData),
  ]);
}
