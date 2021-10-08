const initState = []

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';

const booksReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.data]
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id)
    case GET_BOOKS:
      console.log(action);
      return action.books
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

export const getBooks = async () => {
  const bag = [];
  const books = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/EMqSfZFiiqYcm52MLyia/books/', {
    method: 'GET',
  });

  const booksApi = await books.json();

  Object.entries(booksApi).forEach(
    ([item_id, value]) => bag.push({ item_id, ...value[0] }),
  );

  return {
    type: GET_BOOKS,
    books: bag
  }
};

export default booksReducer;