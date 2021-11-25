import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'
import '../css/dashboard.css'


const Dashboard = () => {

  const [data, setData] = useState([])

  const getData = async () => {
    try {
      const response = await axios.get('/api/data')
      setData(response.data)
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Fragment>
      <div className="table-header">
        <div>ID</div>
        <div>SCHEDULED END DATE</div>
        <div>INFRASTRUCTURE CHANGE ID</div>
        <div>New DepVar</div>
        <div>SUBMITTER</div>
        <div>OCC_CR_Flag</div>
      </div>
      <hr/>
      {data.map(datum => (
        <div>
          <div className="individual-data-entity-container">
            <span>{datum._id}</span>
            <span>{datum.SCHEDULED_END_DATE}</span>
            <span>{datum.INFRASTRUCTURE_CHANGE_ID}</span>
            <span>{datum.New_DepVar}</span>
            <span>{datum.SUBMITTER}</span>
            <span>{datum.OCC_CR_Flag}</span>
          </div>
          <hr/>
        </div>
      ))}
    </Fragment>
  )
}

export default Dashboard
