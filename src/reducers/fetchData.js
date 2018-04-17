// @flow
type FETCH_DATA = {
  type: 'FETCH_DATA'
};

type RECEIVE_DATA = {
  type: 'RECEIVE_DATA',
  data: Object
};

type Action = FETCH_DATA | RECEIVE_DATA;

type State = {
  isFetching: boolean,
  data: Object
};

const initalState = {
  isFetching: false,
  data: {}
};

export default (state: State = initalState, action: Action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        isFetching: true
      };
    case 'RECEIVE_DATA':
      return {
        ...state,
        data: action.data,
        isFetching: false
      };
    default:
      return state;
  }
};
