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
  const {keyword} = useParams();
  const pageNumber = params.pageNumber || 1;
  const dispatch = useDispatch()
  const [dataLength, setDataLength] = useState(0)
  const dataList = useSelector((state) => state.data)
  const {loading, error, data, page, pages, totalEntities, highRiskCount} = dataList
 
  const [searchBy, setSearchBy] = useState(null)
  const [sortType, setSortType] = useState("ascending")
  const sorted = data.sort((a,b) => {
    const isReversed = (sortType === "ascending") ? 1 : -1;
    if(searchBy === '_id') {
      return isReversed * a._id.localeCompare(b._id)
    } else if(searchBy === 'SCHEDULED_END_DATE') {
      return isReversed * a.SCHEDULED_END_DATE.localeCompare(b.SCHEDULED_END_DATE)
    } else if(searchBy === 'INFRASTRUCTURE_CHANGE_ID') {
      return isReversed * a.INFRASTRUCTURE_CHANGE_ID.localeCompare(b.INFRASTRUCTURE_CHANGE_ID)
    } else if(searchBy === 'New_DepVar') {
      return isReversed * a.New_DepVar.localeCompare(b.New_DepVar)
    } else if(searchBy === 'SUBMITTER') {
      return isReversed * a.SUBMITTER.localeCompare(b.SUBMITTER)
    } else if(searchBy === 'OCC_CR_Flag') {
      return isReversed * a.OCC_CR_Flag.localeCompare(b.OCC_CR_Flag)
    }
    
  })


  useEffect(() => {
    dispatch(listData(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <Fragment>
      <FilterSearch/>
      <div className="mb-5">Count of high-risk entities: {highRiskCount}</div>
      <div className="mb-3">Page {page} of {totalEntities} entities</div>
      <Row className="tabular-header">
        <Col sm={12} className="data-col-1">
          <strong 
            onClick={() => {
              setSearchBy('_id');
              sortType === "ascending" ? setSortType("descending") : setSortType("ascending")
            }}
            style={{cursor: 'pointer'}}
          >ID <FontAwesomeIcon icon={faSort}/></strong></Col>
        <Col sm={12} className="data-col-2">
          <strong 
            onClick={() => {
              setSearchBy('SCHEDULED_END_DATE');
              sortType === "ascending" ? setSortType("descending") : setSortType("ascending")}}
            style={{cursor: 'pointer'}}>SCHEDULED END DATE <FontAwesomeIcon icon={faSort}/></strong></Col>
        <Col sm={12} className="data-col-3">
          <strong 
            onClick={() => {
              setSearchBy('INFRASTRUCTURE_CHANGE_ID');
              sortType === "ascending" ? setSortType("descending") : setSortType("ascending")}}
            style={{cursor: 'pointer'}}>INFRASTRUCTURE CHANGE ID <FontAwesomeIcon icon={faSort}/></strong></Col>
        <Col sm={12} className="data-col-4">
          <strong 
            onClick={() => {
              setSearchBy('New_DepVar');
              sortType === "ascending" ? setSortType("descending") : setSortType("ascending")}}
            style={{cursor: 'pointer'}}>New DepVar <FontAwesomeIcon icon={faSort}/></strong></Col>
        <Col sm={12} className="data-col-5">
          <strong 
            onClick={() => {
              setSearchBy('SUBMITTER');
              sortType === "ascending" ? setSortType("descending") : setSortType("ascending")}}
            style={{cursor: 'pointer'}}>SUBMITTER <FontAwesomeIcon icon={faSort}/></strong></Col>
        <Col sm={12} className="data-col-6">
          <strong 
            onClick={() => {
              setSearchBy('OCC_CR_Flag')
              sortType === "ascending" ? setSortType("descending") : setSortType("ascending")}}
            style={{cursor: 'pointer'}}>OCC_CR_Flag <FontAwesomeIcon icon={faSort}/></strong></Col>
      </Row>
      <hr/>
      {sorted.map(datum => (
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
