import { SET_LOADING, SET_ERROR, SET_NEWS_DATA, SET_NEWS_DETAIL } from "./keys";
import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export function setLoadingStatus(payload) {
  return {
    type: SET_LOADING,
    payload: payload
  }
}
export function setError(payload) {
  return {
    type: SET_ERROR,
    payload: payload
  }
}
export function setNewsData(payload) {
  return {
    type: SET_NEWS_DATA,
    payload: payload
  }
}
export function setNewsDetail(payload) {
  return {
    type: SET_NEWS_DETAIL,
    payload: payload
  }
}

export function fetchNewsData() {
  return function(dispatch) {
    dispatch(setLoadingStatus(true))
    try {
      const { data } = await axios({
        method: 'GET',
        url: `${baseUrl}/news`,
        headers: {
          "Content-Type": "application/json",
        },
      })
      dispatch(setNewsData(data.articles))
    } catch (error) {
      dispatch(setError(error))
    } finally {
      dispatch(setLoadingStatus(false))
    }
  }
}
