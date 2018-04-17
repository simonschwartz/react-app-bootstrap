import { call, put } from 'redux-saga/effects';
import { receiveData, internalServerError } from '../actions';
import { fetchData } from '../api';
import { fetchAppData } from './fetchData';

describe('fetchData saga', () => {
  const generator = fetchAppData();

  it('should first call fetchData api', () => {
    const testValue = generator.next().value;
    expect(testValue).toEqual(call(fetchData));
  });

  it('should dispatch RECEIVE_DATA action if fetchData API succeeds', () => {
    const testValue = generator.next().value;
    expect(testValue).toEqual(put(receiveData()));
  });

  it('should dispatch INTERNAL_SERVER_ERROR action for API failure', () => {
    const newGenerator = fetchAppData();
    newGenerator.next();
    const errorResponse = { errorCode: 104112091293120391 };
    const testValue = newGenerator.throw(errorResponse).value;
    expect(testValue).toEqual(put(internalServerError(errorResponse)));
  });
});
