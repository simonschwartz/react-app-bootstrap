import { takeEvery, call, put } from 'redux-saga/effects';
import { receiveData, internalServerError } from '../actions';
import { fetchData } from '../api';

export function* fetchAppData() {
  try {
    const data = yield call(fetchData); // trigger API call
    yield put(receiveData(data)); // dispatch RECEIVE_DATA to update application store
  } catch (error) {
    yield put(internalServerError(error)); // dispatch INTERNAL_SERVER_ERROR action for failure to fetch data
  }
}

// trigger fetchUser saga if 'FETCH_DATA' action is dispatched
export function* watchFetchData() {
  yield takeEvery('FETCH_DATA', fetchData);
}
