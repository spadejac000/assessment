import React, {useEffect} from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector} from 'react-redux'
import {printUser} from '../actions/userActions'

const AppNavbar = () => {

  const dispatch = useDispatch();
  const user = useSelector(state => 
    state.user
  )

  useEffect(() => {
    dispatch(printUser())
  }, [dispatch])

  console.log('hello there: ', user)

  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mb-5">
      <Container>
        <Navbar.Brand href="#home">Take Home Assessment</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/login"><FontAwesomeIcon icon={faUser}/> Login</Nav.Link>
          </Nav>
          <div className="navbar-user-name">
            <span>Welcome, {user.user}</span>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNavbar
