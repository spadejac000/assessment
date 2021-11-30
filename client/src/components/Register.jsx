import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import '../css/register.css';
import {toast} from 'react-toastify'

const Register = ({setAuth}) => {

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: ""
  })

  const {name, email, password} = inputs

  const onChange = (e) => {
    setInputs({...inputs, [e.target.name] : e.target.value})
  }

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {name, email, password}
      const response = await fetch('/api/users/register', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      })
      const parseResponse = await response.json()
      if(parseResponse.token) {
        localStorage.setItem("token", parseResponse.token)
        setAuth(true)
        toast.success("login successfully!")
      } else {
        setAuth(false)
        toast.error(parseResponse)
      }
      
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <div className="register-form-container">
      <Form onSubmit={onSubmitForm} className="container mb-5 card p-5 register-form shadow">
        <h2 className="register-form-title">Register</h2>
        <hr/>
        <Form.Group>
          <Form.Control className="mb-3" type="text" name="name" id="name-register" placeholder="Name" value={name} onChange={e => onChange(e)}/>
        </Form.Group>
        <Form.Group>
          <Form.Control className="mb-3" type="email" name="email" id="email-register" placeholder="Email" value={email} onChange={e => onChange(e)} />
        </Form.Group>
        <Form.Group>
          <Form.Control className="mb-3" type="password" name="password" id="password-register" placeholder="Password" value={password} onChange={e => onChange(e)}/>
        </Form.Group>
        <Button type="submit" className="mb-3 btn-primary">Register</Button>
        <div>Have an account? <Link to={'/login'}>Login</Link></div>
      </Form>
    </div>
  )
}

export default Register;