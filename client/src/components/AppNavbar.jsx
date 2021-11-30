import React, {useEffect} from 'react'
import {Navbar, Container, Nav, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector} from 'react-redux'
import {printUser} from '../actions/userActions'
import {toast } from 'react-toastify';
import '../css/app-navbar.css'

const AppNavbar = ({isAuthenticated, setAuth}) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(printUser())
  }, [dispatch, isAuthenticated])


  const user = useSelector(state => 
    state.user
  )

  const logout = (e) => {
    e.preventDefault()
    localStorage.removeItem('token')
    setAuth(false)
    toast.success("Logged out successfully!")
  }

  return (
    
    isAuthenticated ? 
      
      <Navbar bg="primary" variant="dark" expand="lg" className="app-navbar">
        <Container>
          <Navbar.Brand href="/">Take Home Assessment</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mr-5">
              <Button className="btn-outline-light" onClick={e => logout(e)}><FontAwesomeIcon icon={faUser}/> Logout</Button>
            </Nav>
            <div className="navbar-user-name ms-3">
              <span className="welcome-title">Welcome, {user.user}</span>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    :

      <Navbar bg="primary" variant="dark" expand="lg" className="mb-5">
        <Container>
          <Navbar.Brand href="#home">Take Home Assessment</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/login"><FontAwesomeIcon icon={faUser}/> Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default AppNavbar
