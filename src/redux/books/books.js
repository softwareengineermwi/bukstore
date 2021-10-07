const initState = []

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const booksReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.data]
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id)
    default:
      return state
  }
}

export const addBook = data => ({
  type: ADD_BOOK,
  data: data
})

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id
})

export default booksReducer;