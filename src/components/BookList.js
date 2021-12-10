import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book'
import CreateNewBook from './CreateNewBook ';

const BookList = () => {
  const books = useSelector((state) => state.booksReducer)

  const bookList = books.map((book) => <Book key={book.item_id} id={book.item_id} title={book.title} author="MwiMwi" />)

  return (
    <div className="container max-width-md">
      {bookList}
      <CreateNewBook />
    </div>
  )
}

export default BookList;