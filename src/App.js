import React from 'react'
import './App.css'
import SearchBooks from './SearchBooks'
import BookShelves from './BookShelves'
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
           <BookShelves/>
        )}/>
        <Route path="/search" component={SearchBooks}/>
      </div>
    )
  }
}

export default BooksApp
