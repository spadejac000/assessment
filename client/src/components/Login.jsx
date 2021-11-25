import React from 'react'
import {Form, Button} from 'react-bootstrap'
import '../css/login.css';

export default function SignIn() {
  return (
    <div className="login-form-container">
      <Form className="container mb-5 card p-5 login-form shadow">
        <h2 className="login-form-title">Sign In</h2>
        <hr/>
        <Form.Group>
          <Form.Control className="mb-3" type="email" name="email" id="exampleEmail" placeholder="Email" value={'email'} />
        </Form.Group>
        <Form.Group>
          <Form.Control className="mb-3" type="password" name="password" id="examplePassword" placeholder="Password" value={'password'}/>
        </Form.Group>
        <Button type='submit' color="primary" className="mb-3">Login</Button>
      </Form>
    </div>
  )
}