import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'
import '../css/dashboard.css'
import {Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSort} from '@fortawesome/free-solid-svg-icons';


const Dashboard = () => {

  const [data, setData] = useState([])
  const [dataLength, setDataLength] = useState(0)

  const getData = async () => {
    try {
      const response = await axios.get('/api/data')
      setData(response.data)
      setDataLength(response.data.length)
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Fragment>
      <input type="text" placeholder="Search..." className="form-control mb-5"/>
      <div className="mb-3">Page 1 of {dataLength} entities</div>
      <Row className="tabular-header">
        <Col sm={12} className="data-col-1"><strong>ID <FontAwesomeIcon icon={faSort}/></strong></Col>
        <Col sm={12} className="data-col-2"><strong>SCHEDULED END DATE <FontAwesomeIcon icon={faSort}/></strong></Col>
        <Col sm={12} className="data-col-3"><strong>INFRASTRUCTURE CHANGE ID <FontAwesomeIcon icon={faSort}/></strong></Col>
        <Col sm={12} className="data-col-4"><strong>New DepVar <FontAwesomeIcon icon={faSort}/></strong></Col>
        <Col sm={12} className="data-col-5"><strong>SUBMITTER <FontAwesomeIcon icon={faSort}/></strong></Col>
        <Col sm={12} className="data-col-6"><strong>OCC_CR_Flag <FontAwesomeIcon icon={faSort}/></strong></Col>
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
