import { createStore, combineReducers } from 'redux'
import booksReducer from './redux/books/books'

const reducer = combineReducers({
  booksReducer
})

const store = createStore(reducer)

export default store