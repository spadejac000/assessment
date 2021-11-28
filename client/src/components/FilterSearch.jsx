import React, {useState} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const FilterSearch = () => {

  let navigate = useNavigate()

  const [keyword, setkeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if(keyword.trim()) {
      navigate(`/search/${keyword}`)
    } else {
      navigate('/')
    }
  }

  return (
    <Form className="d-flex" onSubmit={submitHandler}>
      <FormControl
        type="text"
        placeholder="Search..."
        className="me-2"
        aria-label="Search"
        onChange={event => {setkeyword(event.target.value)}}
      />
      <Button type="submit" variant="primary">Search</Button>
    </Form>
  )
}

export default FilterSearch
