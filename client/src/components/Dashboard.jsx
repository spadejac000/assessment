import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'
import '../css/dashboard.css'
import {Row, Col} from 'react-bootstrap'


const Dashboard = ({setAuth}) => {

  const [data, setData] = useState([])
  const [name, setName] = useState("")

  const getName = async () => {
    try {
      const response = await fetch('/api/dashboard', {
        method: "GET",
        headers: {token: localStorage.token}
      })

      const parseResponse = await response.json();
      setName(parseResponse)
    } catch (error) {
      console.error(error.message)
    }
  }

  const getData = async () => {
    try {
      const response = await axios.get('/api/data')
      setData(response.data)
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    getName()
    getData()
  }, [])

  const logout = (e) => {
    e.preventDefault()
    localStorage.removeItem('token')
    setAuth(false)
  }

  return (
    <Fragment>
      <h1>{name}</h1>
      <button onClick={e => logout(e)}>Logout</button>
      <span>Page 1 of 900 entities</span>
      <Row className="tabular-header">
        <Col sm={12} className="data-col-1"><strong>ID</strong></Col>
        <Col sm={12} className="data-col-2"><strong>SCHEDULED END DATE</strong></Col>
        <Col sm={12} className="data-col-3"><strong>INFRASTRUCTURE CHANGE ID</strong></Col>
        <Col sm={12} className="data-col-4"><strong>New DepVar</strong></Col>
        <Col sm={12} className="data-col-5"><strong>SUBMITTER</strong></Col>
        <Col sm={12} className="data-col-6"><strong>OCC_CR_Flag</strong></Col>
      </Row>
      <hr/>
      {data.map(datum => (
        <div>
          <Row className="individual-data-entity-container">
            <Col sm={12} className="data-col-1">{datum._id}</Col>
            <Col sm={12} className="data-col-2">{datum.SCHEDULED_END_DATE}</Col>
            <Col sm={12} className="data-col-3">{datum.INFRASTRUCTURE_CHANGE_ID}</Col>
            <Col sm={12} className="data-col-4">{datum.New_DepVar}</Col>
            <Col sm={12} className="data-col-5">{datum.SUBMITTER}</Col>
            <Col sm={12} className="data-col-6">{datum.OCC_CR_Flag}</Col>
          </Row>
          <hr/>
        </div>
          
      ))}
    </Fragment>
  )
}

export default Dashboard
