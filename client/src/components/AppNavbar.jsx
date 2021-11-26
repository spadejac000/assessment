import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'

const AppNavbar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mb-5">
      <Container>
        <Navbar.Brand href="#home">Take Home Assessment</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNavbar
