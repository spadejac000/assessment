import {USER_REQUEST, USER_SUCCESS, USER_FAIL} from '../constants/userConstants'
import axios from 'axios'

export const printUser = () => async (dispatch) => {
  try {
    dispatch({type: USER_REQUEST})
    let data = await fetch('/api/dashboard', {
      method: "GET",
      headers: {token: localStorage.token}
    })
    const parseResponse = await data.json();
    console.log('working: ', parseResponse)
    dispatch({
      type: USER_SUCCESS, 
      payload: parseResponse
    })
  } catch (error) {
    dispatch({
      type: USER_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.response.data.message
  })
  }
}