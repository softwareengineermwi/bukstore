import React from 'react';
import Book from './Book'
import CreateNewBook from './CreateNewBook ';

const BookList = () => (
  <div className="container max-width-md">
    <Book title="Hoom Hoom" author="Blah 2"></Book>
    <Book title="Zing Zing" author="Blah 2"></Book>
    <Book title="Bazingazing" author="Blah 2"></Book>
    <CreateNewBook></CreateNewBook>
  </div>
);

export default BookList;
