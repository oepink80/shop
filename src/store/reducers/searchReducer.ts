import { SET_SEARCH_QUERY, CLEAR_SEARCH_QUERY } from '../actions/searchActions';

const initialState = {
  searchQuery: '',
};

export default function searchReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case CLEAR_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: '',
      };
    default:
      return state;
  }
}
