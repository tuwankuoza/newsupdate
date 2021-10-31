import { 
  SET_LOADING, 
  SET_ERROR, 
  SET_NEWS_DATA, 
  SET_NEWS_DETAIL,
  SET_CURRENT_INDEX,
  SET_PAGE_LENGTH,
  SET_CURRENT_PAGE,
  SET_SEARCHED_NEWS
} from "./keys";

const initialState = {
  isLoading: false,
  fetchedData: [],
  detailData: {},
  error: {},
  currentIndex: 0,
  pageLength: 0,
  currentPage: 0,
  isSearched: false
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_LOADING:
      return {...state, isLoading: action.payload}
    case SET_NEWS_DATA:
      return {...state, fetchedData: action.payload}
    case SET_NEWS_DETAIL:
      return {...state, detailData: action.payload}
    case SET_ERROR:
      return {...state, error: action.payload}
    case SET_CURRENT_INDEX:
      return {...state, currentIndex: action.payload}
    case SET_PAGE_LENGTH:
      return {...state, pageLength: action.payload}
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.payload}
    case SET_SEARCHED_NEWS:
      return {...state, isSearched: action.payload}
    default:
      return state
  }
}