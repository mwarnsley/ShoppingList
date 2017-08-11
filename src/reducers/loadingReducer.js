import initialState from './initialState';

const loadingState = initialState.loading;

// Creating the Loading Reducer
export function loadingReducer(state = loadingState, action) {
  switch (action.type) {
    case "PAGE_LOADING":
      return {
        ...state,
        pageLoading: action.payload
      };
    break;
    case "SEARCH_LOADING":
      return {
        ...state,
        searchLoading: action.payload
      };
    break;
  }
  return state;
};
