import React, { useEffect } from 'react'
import Headline from '../components/Headline'
import NewsCard from '../components/NewsCard'

export default function Home() {
  return (
    <div style={style.container}>
      <h2>Daily News Update</h2>
      <Headline />
      <h2>More News</h2>
      <NewsCard />
    </div>
  )
}

const style = {
  container: {
    textAlign: 'center',
    marginBottom: 25
  }
}