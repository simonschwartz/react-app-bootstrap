const initalState = {
  isFetching: false,
  data: {}
};

export default (state = initalState, action) => {
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
