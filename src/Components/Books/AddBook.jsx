import React from 'react'
import ApiService from '../../Utils/ApiService'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import Topbar from '../Common/Topbar'
import { Form } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import * as Yup from 'yup'

function AddBook() {

    const navigate = useNavigate()

    let formik = useFormik({
        initialValues:{
            title:'',
            author:'',
            isbnNum:'',
            description:'',
            date:''
        },
        validationSchema:Yup.object({
            title :Yup.string().max(20,'Title cannot exceed 20 characters')
            .min(3,"Title connot be shorter than 3 characters")
            .required('Title cannot be empty'),
            author: Yup.string().max(200,'Author cannot exceed 200 characters')
            .min(5,'Author cannot exceed be shorter than 5 characters')
            .required('Author cannot be empty'),
            isbnNum: Yup.string().required('isbnNumber connot be empty'),
            description: Yup.string().max(200,'description cannot exceed 200 characters')
            .min(5,"description cannot be shorter than 5 characters")
            .required("description cannot be empty"),
            date: Yup.string().required('date cannot be empty')
        }),
        onSubmit : async(values)=>{
            try{
                let res = await ApiService.post('/formik',values)
                console.log(res);
                if(res.status===201){
                    navigate('/')
                }
            } catch(error){
                alert('failed to create book')
            }
        }
    })

  return (
    <>
    <Topbar/>
    <div className="d-flex align-items-center justify-content-center">
      <Container>
        <Form className='mt-5' onSubmit={formik.handleSubmit}>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" id="title" name="title" onChange={formik.handleChange} value={formik.values.title} onBlur={formik.handleBlur} placeholder="Enter Book Title"/>
              {formik.touched.title && formik.errors.title ? (<div style={{color: 'red'}}>{formik.errors.title}</div>) : null}
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control  id="author" name="author" onChange={formik.handleChange} value={formik.values.author} onBlur={formik.handleBlur} placeholder="Enter Author Name"/>
              {formik.touched.author && formik.errors.author ? (<div style={{color: 'red'}}>{formik.errors.author}</div>) : null}
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>ISBN Number</Form.Label>
              <Form.Control type='text' id="isbnNum" name="isbnNum" onChange={formik.handleChange} value={formik.values.isbnNum} onBlur={formik.handleBlur} placeholder="Enter ISBN Number"/>
              {formik.touched.isbnNum && formik.errors.isbnNum ? (<div style={{color: 'red'}}>{formik.errors.isbnNum}</div>) : null}
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control id="description" name="description" as='textarea' rows={3} onChange={formik.handleChange} value={formik.values.description} onBlur={formik.handleBlur} placeholder="Enter Description"/>
              {formik.touched.description && formik.errors.description ? (<div style={{color: 'red'}}>{formik.errors.description}</div>) : null}
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Released in</Form.Label>
              <Form.Control type='date' id="date" name="date" onChange={formik.handleChange} value={formik.values.date} onBlur={formik.handleBlur} placeholder="Enter Released date"/>
              {formik.touched.date && formik.errors.date ? (<div style={{color: 'red'}}>{formik.errors.date}</div>) : null}
            </Form.Group>
          </Col>
          <Button variant="outline-success" type='submit'>Submit</Button>
          
        </Form>
      </Container>
    </div>
    </>
  )
}

export default AddBook