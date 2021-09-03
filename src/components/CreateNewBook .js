import React from 'react';

const CreateNewBook = () => (
  <div className="border-top">
    <h3>ADD NEW BOOK</h3>
    <div className="grid gap-sm">
      <div className="col-6">
        <input type="text" className="width-100%" placeholder="Book title"></input>
      </div>
      <div className="col-4">
        <select name="" id="" className="width-100%">
          <option value="">CATEGORY</option>
        </select>
      </div>
      <div className="col-2">
        <button className="width-100%">ADD BOOK</button>
      </div>
    </div>
  </div>
);

export default CreateNewBook