import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { fetchNewsData, setCurrentPage } from '../store/action';
import { Card, Button } from 'react-bootstrap'
import ClipLoader from "react-spinners/ClipLoader";

export default function NewsCard() {

  let history = useHistory()
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchNewsData())
  }, [dispatch])
  
  const loading = useSelector(state => state.isLoading)
  let data = useSelector(state => state.fetchedData)
  let page = useSelector(state => state.currentPage)
  let maxPage = useSelector(state => state.pageLength)
  let result = data.slice(((page * 8) - 8), ((page * 8)))
  data = result
  
  if(loading) {
    return <ClipLoader />
  }
  return (
    <div className="container">
      <div className="row" style={{paddingLeft: 30}}>
      {
        data?.map((element) => {
          return (
            <Card style={style.cardStyle}>
              <Card.Img variant="top" src={element.urlToImage} />
              <Card.Body>
                <Card.Title>{element.title}</Card.Title>
              </Card.Body>
              <Button variant="dark" style={style.date}
              onClick = {() => window.open(element.url, "_blank")}
              >
              Baca Lebih Lanjut
              </Button>
            </Card>
          )
        })
      }
        <div style={style.pagination}>
          {
            page !== 1 ?
            <Button variant="dark" style={style.date} onClick={() => dispatch(setCurrentPage(page-1))}>Previous</Button>
            : <></>
          }
          <h3 style={{margin: 10}}>Page {page}</h3>
          {
            page < maxPage?
            <Button variant="dark" style={style.date} onClick={() => dispatch(setCurrentPage(page+1))}>Next</Button>
            : <></>
          }
        </div>
      </div>
    </div>
  )
}

const style = {
  cardStyle: {
    width: '18rem',
    margin: 10,
    marginBottom: 10,
    border: 'none',
  },
  pagination: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    marginTop: 30, 
    padding: 10, 
  }
}
