import { createAction } from 'redux-actions';

import * as C from './constants';

// these are the actions we can take against the redux store
// our reducers and sagas will be looking for is a specific actions has been taken
export const getExampleDataRequest = createAction(C.GET_EXAMPLE_DATA_REQUEST);
export const getExampleDataSuccess = createAction(C.GET_EXAMPLE_DATA_SUCCESS);
export const getExampleDataFailure = createAction(C.GET_EXAMPLE_DATA_FAILURE);
export const clearExampleData = createAction(C.CLEAR_EXAMPLE_DATA);
