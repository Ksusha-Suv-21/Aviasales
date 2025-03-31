import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk';
import { compose, applyMiddleware } from 'redux';
import filterReducer from "./reducer/filterReduser"
import checkboxReducer from './reducer/checkboxReducer'
import apiReducer from './reducer/apiReducer';

const reducer = combineReducers({
    filterReducer,
    checkboxReducer,
    apiReducer
  })
  
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

export const store = configureStore({ reducer }, composeEnhancers(applyMiddleware(thunk)))
