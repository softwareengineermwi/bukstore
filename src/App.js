
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import './App.css';

import BookList from './components/BookList';
import Categories from './components/Categories';
import { getBooks } from './redux/books/books';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()

  useEffect(async () => {
    dispatch(await getBooks())
  })

  return (
    <Router>
      <div className="App">
        <div className="bg margin-bottom-md">
          <div className="container max-width-md padding-y-sm">
            <nav className="grid">
              <div className="col-10 flex items-center">
                <a href="#0"><h4 className="ws-nowrap padding-right-md">Bookstore CMS</h4></a>
                <Link to="/" className="text-sm padding-right-md">BOOKS</Link>
                <Link to="/categories" className="text-sm padding-right-md">CATEGORIES</Link>
              </div>

              <div className="col-2 flex justify-end text-right">
                <img className="radius-50% height-lg width-lg" src="https://codyhouse.co/app/assets/img/avatar-img-1.svg" alt="Emily Ewing" title="Emily Ewing"></img>
              </div>
            </nav>
          </div>
        </div>

        <Switch>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/">
            <BookList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
