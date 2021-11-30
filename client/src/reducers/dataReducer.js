import {DATA_LIST_REQUEST, DATA_LIST_SUCCESS, DATA_LIST_FAIL} from '../constants/dataConstants'

export const dataReducer = (state = {data: []}, action) => {
  switch(action.type) {
    case DATA_LIST_REQUEST:
      return {loading: true, data: []}
    case DATA_LIST_SUCCESS:
      return {
        loading: false, 
        data: action.payload.data,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case DATA_LIST_FAIL:
      return {loading: false, error: action.payload}
    default:
      return state;
  }
}