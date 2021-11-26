import React from 'react'
import {Form, Button} from 'react-bootstrap'
import '../css/login.css';
import {Link} from 'react-router-dom';

export default function Login({setAuth}) {
  return (
    <div className="login-form-container">
      <Form className="container mb-5 card p-5 login-form shadow">
        <h2 className="login-form-title">Login</h2>
        <hr/>
        <Form.Group>
          <Form.Control className="mb-3" type="email" name="email" id="exampleEmail" placeholder="Email" value={'email'} />
        </Form.Group>
        <Form.Group>
          <Form.Control className="mb-3" type="password" name="password" id="examplePassword" placeholder="Password" value={'password'}/>
        </Form.Group>
        <Button type='submit' color="primary" className="mb-3" onClick={() => setAuth(true)}>Login</Button>
        <div>No account yet? <Link to={'/register'}>Register</Link></div>
      </Form>
    </div>
  )
}