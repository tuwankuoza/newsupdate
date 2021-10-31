import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { fetchNewsData, setCurrentIndex } from '../store/action';
import { Card, Button } from 'react-bootstrap'

export default function Headline() {

  let history = useHistory()
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchNewsData())
  }, [dispatch])
  
  let fetchedData = useSelector(state => state.fetchedData)
  let index = useSelector(state => state.currentIndex)
  let data = fetchedData[index]
  
  return (
    <div className="container">
      <div style={style.pagination}>
        {
          index > 0 ?
          <Button variant="light" style={style.date} onClick={() => dispatch(setCurrentIndex(index-1))}>Previous</Button>
          : <></>
        }
        {
          index < fetchedData?.length-1 ?
          <Button variant="light" style={style.date} onClick={() => dispatch(setCurrentIndex(index+1))}>Next</Button>
          : <></>
        }
      </div>
      <div className="row">
        <Card className="bg-dark text-white" style={style.cardStyle} 
        onClick = {() => window.open(data.url, "_blank")}
        >
          <Card.Img src={data?.urlToImage} alt="Card image"/>
          <Card.ImgOverlay style={style.overlay}>
            <Card.Title>{data?.publishedAt.split('T')[0]}</Card.Title>
            <Card.Text>{data?.title}</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
    </div>
  )
}

const style = {
  cardStyle: {
    marginBottom: 70,
    border: 'none',
    color: 'black'
  },
  overlay: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  pagination: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    marginTop: 30, 
    padding: 10, 
  }
}
