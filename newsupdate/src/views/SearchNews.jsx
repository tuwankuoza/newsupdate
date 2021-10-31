import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import NewsCard from '../components/NewsCard'
import { fetchNewsDataWithKeywords } from '../store/action'

export default function SearchNews() {

  let dispatch = useDispatch()
  const isSearched = useSelector(state => state.isSearched)
  const [keywords, setKeywords] = useState('')

  const findNews = (event) => {
    event.preventDefault()
    dispatch(fetchNewsDataWithKeywords(keywords))
  }

  return (
    <div class="container" style={style.search}>
      <div class="row-6">
        {
          !isSearched ?
          <img 
          style={{width: 600, height: 500}}
          src="https://ik.imagekit.io/xvfgr2ixls8/undraw_Online_articles_re_yrkj_aMjK2zJV9.png?updatedAt=1635681029149" alt="Product"/>
          : <></>
        }
        <form style={{textAlign: 'center'}} onSubmit= {findNews}>
          <input type="text" placeholder="Search for news topic" required
          value={keywords}
          onChange={(event) => setKeywords(event.target.value)} 
          style={{marginBottom: 10}}
          />
          <br></br>
          <Button
          type="submit" variant="dark"
          >
          Search News</Button>
        </form>
      </div>
      {
        isSearched ?
        <NewsCard />
        : <></>
      }
    </div>
  )
}

const style = {
  search: {
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center'}
}
