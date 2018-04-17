import * as actions from './fetchData';

describe('fetchData actions', () => {
  it('should create an action to fetch data', () => {
    const expectedAction = {
      type: actions.FETCH_DATA
    };
    expect(actions.fetchData()).toEqual(expectedAction);
  });

  it('should create an action to receive data', () => {
    const data = { data: 'a value', moreData: 'another value' };
    const expectedAction = {
      type: actions.RECEIVE_DATA,
      data
    };
    expect(actions.receiveData(data)).toEqual(expectedAction);
  });
});
