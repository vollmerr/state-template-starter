import { handleActions } from 'redux-actions';

import * as C from './constants';

// initial state of this piece of the redux store
export const initialState = {
  exampleData: [],
};

// reducers are pure functions that update a single section of the state
export const exampleSuccessReducer = (state, action) => ({
  ...state,
  exampleData: [
    ...state.exampleData,
    ...action.payload,
  ],
});

export const clearExampleReducer = state => ({
  ...state,
  exampleData: initialState.exampleData,
});

// map action names redux should look for against how it should update the store when recieved
export default handleActions({
  [C.GET_EXAMPLE_DATA_SUCCESS]: exampleSuccessReducer,
  [C.CLEAR_EXAMPLE_DATA]: clearExampleReducer,
}, initialState);
