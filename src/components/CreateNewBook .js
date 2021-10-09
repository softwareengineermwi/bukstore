import React from 'react';
import { useDispatch } from 'react-redux'
import { addBook } from '../redux/books/books';
import { g_v2 } from './utils'
import { v4 as uuidv4 } from 'uuid'

const CreateNewBook = () => {
  const dispatch = useDispatch()

  const submitBookToStore = async () => {
    const newBook = {
      item_id: uuidv4(),
      title: g_v2('_title').value,
      category: 'Mwila',
    }

    dispatch(await addBook(newBook))
  }

  return (
    <div className="border-top">
      <h4 className="padding-y-xs">ADD NEW BOOK</h4>
      <div className="grid gap-sm items-center">
        <div className="col-6">
          <input type="text" className="width-100% form-control" placeholder="Book title" id="_title"></input>
        </div>
        <div className="col-4">
          <select name="" id="_category" className="width-100% form-control">
            <option value="">CATEGORY</option>
          </select>
        </div>
        <div className="col-2">
          <button className="width-100% flex btn" onClick={submitBookToStore}>ADD BOOK</button>
        </div>
      </div>
    </div>
  )
}

export default CreateNewBook