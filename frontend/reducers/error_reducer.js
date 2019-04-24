import {RECEIVE_ERRORS, CLEAR_ERRORS } from "../actions/error_actions";

const errorsReducer = (state= [], action) => {
  Object.freeze(state); 
  let newState = state.slice();
  switch (action.type) {
    case RECEIVE_ERRORS:
      newState = newState.concat(action.errors);
      return newState;
    case CLEAR_ERRORS:
      newState = [];
      return newState;
    default:
      return state;
  };
};

export default errorsReducer;