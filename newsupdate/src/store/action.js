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
export function setCurrentIndex(payload) {
  return {
    type: SET_CURRENT_INDEX,
    payload: payload
  }
}
export function setPageLength(payload) {
  return {
    type: SET_PAGE_LENGTH,
    payload: payload
  }
}
export function setCurrentPage(payload) {
  return {
    type: SET_CURRENT_PAGE,
    payload: payload
  }
}
export function setIsSearchedNews(payload) {
  return {
    type: SET_SEARCHED_NEWS,
    payload: payload
  }
}

export function fetchNewsData() {
  return async function(dispatch) {
    dispatch(setLoadingStatus(true))
    try {
      const { data } = await axios({
        method: 'GET',
        url: `${baseUrl}/news`,
        headers: {
          "Content-Type": "application/json",
        },
      })
      let pageLength = Math.ceil(data.articles.length/8)
      dispatch(setPageLength(pageLength))
      dispatch(setCurrentPage(1))
      dispatch(setNewsData(data.articles))
    } catch (error) {
      dispatch(setError(error))
    } finally {
      dispatch(setLoadingStatus(false))
    }
  }
}

export function fetchNewsDataWithKeywords(keywords) {
  return async function(dispatch) {
    dispatch(setLoadingStatus(true))
    try {
      const { data } = await axios({
        method: 'GET',
        url: `${baseUrl}/news?keywords=${keywords}`,
        headers: {
          "Content-Type": "application/json",
        },
      })
      let pageLength = Math.ceil(data.articles.length/8)
      dispatch(setPageLength(pageLength))
      dispatch(setCurrentPage(1))
      dispatch(setNewsData(data.articles))
    } catch (error) {
      dispatch(setError(error))
    } finally {
      dispatch(setLoadingStatus(false))
      dispatch(setIsSearchedNews(true))
    }
  }
}