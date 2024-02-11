import React from 'react'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Topbar() {
    const navigate = useNavigate()
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand onClick={()=> navigate('/')} >Library Management System</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=> navigate('/')} >Home</Nav.Link>
            <Nav.Link onClick={()=> navigate('/dashboard-author')} >Dashboard</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={()=>navigate('/add-book')} >Add Book</Nav.Link>
            <Nav.Link onClick={()=>navigate('/add-author')}> Add Author</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Topbar