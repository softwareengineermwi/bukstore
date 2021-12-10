import React from 'react';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';
import { useDispatch } from 'react-redux';

const Book = ({ title, author, id, }) => {
  const dispatch = useDispatch()

  const removeHandler = async (e) => {
    dispatch(await removeBook(e.target.id))
  }

  return (
    <div className="grid items-center margin-bottom-md shadow-xs bg padding-sm">
      <div className="col-5">
        <span className="text-sm">Action</span>
        <h3>{title}</h3>
        <cite className="text-sm">{author}</cite>
        <ul className="list flex gap-sm padding-top-sm">
          <li><button className="btn btn--sm btn-custom" id={id}>Comment</button></li>
          <li>|</li>
          <li><button className="btn btn--sm btn-custom" id={id} onClick={removeHandler}>Remove</button></li>
          <li>|</li>
          <li><button className="btn btn--sm btn-custom" id={id}>Edit</button></li>
        </ul>
      </div>

      <div className="col-4 flex">
        <div className=" flex items-center">
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

        <div className="heigh-100% position-relative">
          <div className="mark padding-left-lg"></div>
        </div>
      </div>

      <div className="col-3">
        <span className="text-sm block">CURRENT CHAPTER</span>
        <span className="text-sm block">Chapter 0</span>
        <button className="btn btn--sm margin-top-sm">UPDATE PROGRESS</button>
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