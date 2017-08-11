import initialState from './initialState';

const searchState = initialState.search;

// Creating the Search Reducer
export function searchReducer(state = searchState, action) {
  switch (action.type) {
    case "SEARCH_ITEM":
      const searchResults = action.payload;
      return {
        results: searchResults.items,
        currentQuery: searchResults.query,
      };
    break;
  }
  return state;
};
