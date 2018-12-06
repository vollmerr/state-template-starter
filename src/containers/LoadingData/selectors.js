import { createSelector } from 'reselect';

// select the domain from the overall state
const selectLoadingData = state => state.loadingData;

// get the actual property within the domain
export const getExampleData = () => createSelector(selectLoadingData, x => x.exampleData);
