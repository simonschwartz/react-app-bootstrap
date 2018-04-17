/*
 * action types
 */

export const INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR';

/*
 * action creators
 */

// updates the state for handling 500 - Internal server error
export const internalServerError = error => ({
  type: INTERNAL_SERVER_ERROR,
  error
});

export default {
  internalServerError
};
