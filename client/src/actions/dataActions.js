import {DATA_LIST_REQUEST, DATA_LIST_SUCCESS, DATA_LIST_FAIL} from '../constants/dataConstants'
import axios from 'axios';

export const listData = (keyword = '', pageNumber = '') => async (dispatch) => {
  try {
    dispatch({type: DATA_LIST_REQUEST})

    const {data} = await axios.get(`/api/data?${keyword.trim()}&pageNumber=${pageNumber}`)

    console.log('the data in actions res: ', data)

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