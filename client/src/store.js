import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {userReducer} from './reducers/userReducer'
import {dataReducer} from './reducers/dataReducer'

const reducer = combineReducers({
  user: userReducer,
  data: dataReducer
});
const initialState = {};
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;