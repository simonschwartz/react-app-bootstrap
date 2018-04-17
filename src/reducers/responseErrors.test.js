import reducer from './responseErrors';
import * as actions from '../actions/responseErrors';

describe('fetchData reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should create an action for internal server error', () => {
    const error = { errorCode: 4009, errorMessage: 'something broke' };
    const expectedAction = {
      type: actions.INTERNAL_SERVER_ERROR,
      error
    };
    expect(actions.internalServerError(error)).toEqual(expectedAction);
  });
});
