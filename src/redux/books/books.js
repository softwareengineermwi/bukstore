const initState = []

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';

const booksReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.data]
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.item_id)
    case GET_BOOKS:
      return action.books
    default:
      return state
  }
}

export const addBook = async (book) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/dvJJFUiIyaXVMI2obBpP/books', {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(book),
  });

  return {
    type: ADD_BOOK,
    data: book
  };
}

export const removeBook = async (id) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/dvJJFUiIyaXVMI2obBpP/books/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({ item_id: id }),
  });

  return {
    type: REMOVE_BOOK,
    item_id: id
  };
}

export const getBooks = async () => {
  const bag = [];

  const books = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/dvJJFUiIyaXVMI2obBpP/books/', {
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