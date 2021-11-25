import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'


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
      {data.map(datum => (
        <div>
          <span>{datum._id}</span>
          <span>{datum.SCHEDULED_END_DATE}</span>
          <span>{datum.INFRASTRUCTURE_CHANGE_ID}</span>
          <span>{datum.New_DepVar}</span>
          <span>{datum.SUBMITTER}</span>
          <span>{datum.OCC_CR_Flag}</span>
          {/* <span>{datum.APP_AG}</span>
          <span>{datum.PredictedFlag}</span>
          <span>{datum.ScoringDate}</span>
          <span>{datum.STATUS_VALUE}</span>
          <span>{datum.SUBMIT_DATE}</span>
          <span>{datum.SCHEDULED_START_DATE}</span> */}
        </div>
      ))}
    </Fragment>
  )
}

export default Dashboard
