/*
 * action types
 */

export const FETCH_DATA = 'FETCH_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';

/*
 * action creators
 */

// fetches data
// triggers the fetchData Saga middleware
export const fetchData = () => ({
  type: FETCH_DATA
});

// updates the state when FETCH_DATA action succeeds
// triggered by the fetchData Saga middleware
export const receiveData = data => ({
  type: RECEIVE_DATA,
  data
});

export default {
  fetchData,
  receiveData
};
