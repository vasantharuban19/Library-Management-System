import React,{useState,useEffect} from 'react'
import Topbar from '../Common/Topbar'
import ApiService from '../../Utils/ApiService'
import { Container } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Table} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function DashboardAuthor() {
  const [authordata,setAuthorData] = useState([])
  const navigate = useNavigate()
  useEffect(()=>{
    getAuthorData()
  },[])

  const getAuthorData = async()=>{
    try{
      let res = await ApiService.get('/formik')
      if(res.status===200){
        setAuthorData(res.data)
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
        getAuthorData()
      }
    }
    catch(error){
      alert('data remove failed')
    }
  }
  return (
    <>
    <Topbar/>
    <Container>
      <Row className='d-flex justify-content-start flex-row'>
      <div className='mt-3'>
              <Table striped bordered hover variant="warning">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Author's Name</th>
                    <th>Author's DOB</th>
                    <th>Author's Bio</th>
                    <th>Edit/Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    authordata.map((e,i)=>{
                      return <>
                        <tr key={i}>
                          <td>{i+1}</td>
                          <td>{e.name}</td>
                          <td>{e.Date}</td>
                          <td>{e.bio}</td>
                          <td>
                            <Button variant='secondary' onClick={()=>navigate(`/edit-author/${e.id}`)}>Edit</Button>
                            &nbsp;
                            <Button variant='danger' onClick={()=>{handleDelete(e.id)}}>Delete</Button>
                          </td>
                        </tr>
                      </>
                    })
                  }
                </tbody>
              </Table>
            </div>
      </Row>
    </Container>
    </>
    )
}

export default DashboardAuthor