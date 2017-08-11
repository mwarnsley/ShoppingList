// Writing the action for page loading
export function pageLoading(loading) {
  return {
    type: 'PAGE_LOADING',
    payload: loading
  };
}

// Writing the action for search loading
export function searchLoading(loading) {
  return {
    type: 'SEARCH_LOADING',
    payload: loading
  };
}
