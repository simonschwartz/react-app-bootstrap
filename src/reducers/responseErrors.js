// @flow
type INTERNAL_SERVER_ERROR = {
  type: 'INTERNAL_SERVER_ERROR',
  error: Object
};

type Action = INTERNAL_SERVER_ERROR;

type State = Object;

const initalState = {};

export default (state: State = initalState, action: Action) => {
  switch (action.type) {
    case 'INTERNAL_SERVER_ERROR':
      return {
        ...state,
        message: action.error
      };
    default:
      return state;
  }
};
