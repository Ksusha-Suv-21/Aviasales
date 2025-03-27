import { configureStore, combineReducers } from '@reduxjs/toolkit'

import filterReducer from "./reducer/filterReduser"
import checkboxReducer from './reducer/checkboxReducer'

const reducer = combineReducers({
    filterReducer,
    checkboxReducer
  })
  

export const store = configureStore({ reducer })