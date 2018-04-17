import { all } from 'redux-saga/effects';
import { fetchAppData, watchFetchData } from './fetchData';

export default function* rootSaga() {
  yield all([fetchAppData(), watchFetchData()]);
}
