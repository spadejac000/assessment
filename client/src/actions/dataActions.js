import {DATA_LIST_REQUEST, DATA_LIST_SUCCESS, DATA_LIST_FAIL} from '../constants/dataConstants'
import axios from 'axios';

export const listData = (keyword = '') => async (dispatch) => {
  console.log('keyword in data actions: ', keyword)
  try {
    dispatch({type: DATA_LIST_REQUEST})

    const {data} = await axios.get(`/api/data?${keyword.trim()}`)

    console.log('here is the data for the keyword: ', data)

    dispatch({
      type: DATA_LIST_SUCCESS,
      payload: data
    })

  } catch (error) {
    console.error(error.message)
    dispatch({
      type: DATA_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.response.data.message
    })
  }
}