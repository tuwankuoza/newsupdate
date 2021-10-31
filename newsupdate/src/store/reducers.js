import { SET_LOADING, SET_ERROR, SET_NEWS_DATA, SET_NEWS_DETAIL } from "./keys";

const initialState = {
  isLoading: false,
  fetchedData: [],
  detailData: {},
  error: {},
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
    default:
      return state
  }
}