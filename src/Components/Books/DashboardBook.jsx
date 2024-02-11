import React,{useState,useEffect} from 'react'
import Topbar from '../Common/Topbar'
import ApiService from '../../Utils/ApiService'
import { Container } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function DashboardBook() {
  const [bookdata,setBookData] = useState([])
  const navigate = useNavigate()
  useEffect(()=>{
    getBookData()
  },[])

  const getBookData = async()=>{
    try{
      let res = await ApiService.get('/formik')
      if(res.status===200){
        setBookData(res.data)
      }
    } 
    catch(error){
      alert('data fetch failed')
    }
  }

  const handleDelete = async(id)=>{
    try{
      let res = await ApiService.delete(`/formik/${id}`)
      if(res.status===200){
        getBookData()
      }
    }
    catch(error){
      alert('data remove failed')
    }
  }

  const Cards = () => {
    return bookdata.map((e, i) => (
      <Col key={i} xs={12} md={4} className='mb-4'>
        <Card border="success" style={{backgroundColor:'rgb(255,243,205)'}}>          
            <Card.Body>
            <Card.Title className="text-right justify-content-center" style={{display:'flex'}}>
              <strong >{e.title}</strong> 
            </Card.Title><hr/>
            <Card.Text>
              <strong>Author :</strong> {e.author}
            </Card.Text>
            <Card.Text>
              <strong>ISBN No :</strong> {e.isbnNum}
            </Card.Text>
            <Card.Text>
              <strong>Description :</strong> {e.description}
            </Card.Text>
            <Card.Text>
              <strong>Published At :</strong> {e.date}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-right justify-content-center" style={{display:'flex'}}>
            <Button variant='secondary' onClick={() => navigate(`/edit-book/${e.id}`)}>
              Edit
            </Button>
            &nbsp;
            <Button variant='danger' onClick={() => handleDelete(e.id)}>
              Delete
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    ))
    }
  return (
    <>
    <Topbar/>
    <Container>      
        <Row className='mt-3'>{Cards()}</Row>
      </Container>
    </>
    )
}

export default DashboardBook