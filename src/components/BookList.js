import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book'
import CreateNewBook from './CreateNewBook ';

const BookList = () => {
  const books = useSelector((state) => state.booksReducer)
  const bookList = books.map(({ title, author, id }) => <Book key={id} id={id} title={title} author={author} />)
  return (
    <div className="container max-width-md">
      {bookList}
      <CreateNewBook />
    </div>
  )
}

export default BookList;