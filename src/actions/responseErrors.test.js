import * as actions from './responseErrors';

describe('responseErrors actions', () => {
  it('should create an action for internal server error', () => {
    const error = { errorCode: 4009, errorMessage: 'something broke' };
    const expectedAction = {
      type: actions.INTERNAL_SERVER_ERROR,
      error
    };
    expect(actions.internalServerError(error)).toEqual(expectedAction);
  });
});
