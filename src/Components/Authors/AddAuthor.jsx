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

function AddAuthor() {

    const navigate = useNavigate()

    let formik = useFormik({
        initialValues:{
            name:'',
            Date:'',
            bio:''
        },
        validationSchema:Yup.object({
            name :Yup.string().max(20,'Name cannot exceed 20 characters')
            .min(3,"Name connot be shorter than 3 characters")
            .required('name cannot be empty'),
            bio: Yup.string().max(200,'Bio cannot exceed 200 characters')
            .min(5,'Bio cannot exceed be shorter than 5 characters')
            .required('Bio cannot be empty'),
            Date: Yup.string().required('DOB cannot be empty')
        }),
        onSubmit : async(values)=>{
            console.log(values);
            try{
                let res = await ApiService.post('/formik',values)
                if(res.status===201){
                    navigate('/dashboard-author')
                }
            } catch(error){
                alert('failed to create author')
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
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} placeholder="Enter Author Name"/>
              {formik.touched.name && formik.errors.name ? (<div style={{color: 'red'}}>{formik.errors.name}</div>) : null}
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Bio</Form.Label>
              <Form.Control as="textarea" id="bio" name="bio" onChange={formik.handleChange} value={formik.values.bio} onBlur={formik.handleBlur} placeholder="Enter Author Bio"/>
              {formik.touched.bio && formik.errors.bio ? (<div style={{color: 'red'}}>{formik.errors.bio}</div>) : null}
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type='date' id="Date" name="Date" onChange={formik.handleChange} value={formik.values.Date} onBlur={formik.handleBlur} placeholder="Enter date of birth"/>
              {formik.touched.Date && formik.errors.Date ? (<div style={{color: 'red'}}>{formik.errors.Date}</div>) : null}
            </Form.Group>
          </Col>
          
          <Button variant="outline-success" type='submit'>Submit</Button>
          
        </Form>
      </Container>
    </div>
    </>
  )
}

export default AddAuthor