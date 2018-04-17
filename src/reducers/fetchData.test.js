import reducer from './fetchData';
import * as actions from '../actions/fetchData';

describe('fetchData reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isFetching: false,
      data: {}
    });
  });

  it('should handle FETCH_DATA', () => {
    expect(
      reducer(
        {},
        {
          type: actions.FETCH_DATA
        }
      )
    ).toEqual({
      isFetching: true
    });
  });

  it('should handle RECEIVE_DATA', () => {
    const data = { data: 'a value', moreData: 'another value' };
    expect(
      reducer(
        {},
        {
          type: actions.RECEIVE_DATA,
          data
        }
      )
    ).toEqual({
      isFetching: false,
      data
    });
  });
});
