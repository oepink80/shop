import type { AppDispatch } from '../store';

export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';

export const setSearchQuery = (query: string) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});

export const CLEAR_SEARCH_QUERY = 'CLEAR_SEARCH_QUERY';

export const clearSearchQuery = () => ({
  type: CLEAR_SEARCH_QUERY,
});
