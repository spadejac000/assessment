import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'
import '../css/dashboard.css'
import {Row, Col, Form, FormControl, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSort} from '@fortawesome/free-solid-svg-icons';
import Paginate from './Paginate';
import {useDispatch, useSelector} from 'react-redux';
import {listData} from '../actions/dataActions';
import {useParams} from 'react-router-dom'
import FilterSearch from './FilterSearch'


const Dashboard = () => {
  const params = useParams()

  console.log('use Params: ', params)

  const {keyword} = useParams();

  const pageNumber = params.pageNumber || 1;
  const dispatch = useDispatch()
  const [dataLength, setDataLength] = useState(0)

  const dataList = useSelector((state) => state.data)
  const {loading, error, data, page, pages} = dataList

  useEffect(() => {
    dispatch(listData(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <Fragment>
      <FilterSearch/>
      <div className="mb-3">Page {page} of {data.length * pages} entities</div>
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
      <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''}/>
    </Fragment>
  )
}

export default Dashboard
