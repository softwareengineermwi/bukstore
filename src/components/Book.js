import React from 'react';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';
import { useDispatch } from 'react-redux';

const Book = ({ title, author, id, }) => {
  const dispatch = useDispatch()
  
  const removeHandler = (e) => {
    dispatch(removeBook(e.target.id))
  }

  return (
    <div className="grid margin-bottom-md">
      <div className="col-6">
        <span>Action</span>
        <h3>{title}</h3>
        <cite>{author}</cite>
        <ul className="list flex gap-md">
          <li><button id={id}>Comment</button></li>
          <li><button id={id} onClick={removeHandler}>Remove</button></li>
          <li><button id={id}>Edit</button></li>
        </ul>
      </div>

      <div className="col-3 flex items-center">
        <div className="position-relative">
          <svg height="100" width="100">
            <circle className="tr" cx="50" cy="50" r="40" stroke="#428bca" fill="#fff" />
          </svg>
        </div>
        <div>
          <span className="text-xl">64%</span>
          <div>
            <span>Completed</span>
          </div>
        </div>
      </div>

      <div className="col-3">
        <span>CURRENT CHAPTER</span>
        <span>Chapter 0</span>
        <button>UPDATE PROGRESS</button>
      </div>
    </div>
  )
}

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
};

Book.defaultProps = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
};

export default Book