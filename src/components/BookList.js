import React from 'react';
import Book from './Book'
import CreateNewBook from './CreateNewBook ';

const dummyArr = [
  {
    title: 'Hoom Hoom',
    author: 'Auth1',
  },
  {
    title: 'Zing Zing',
    author: 'Auth2',
  },
  {
    title: 'Bazingzing',
    author: 'Auth3',
  },
]

const BookList = () => (
  <div className="container max-width-md">
    {
      dummyArr.map(({ title, author }) => (<Book key={title + author} title={title} author={author} />))
    }
    <CreateNewBook />
  </div>
);

export default BookList;