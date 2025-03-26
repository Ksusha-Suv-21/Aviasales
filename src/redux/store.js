import { configureStore, combineReducers } from '@reduxjs/toolkit'

import filterReducer from "./filterReduser"
import checkboxReducer from './checkboxReducer'

const reducer = combineReducers({
    filterReducer,
    checkboxReducer
  })
  

export const store = configureStore({ reducer })