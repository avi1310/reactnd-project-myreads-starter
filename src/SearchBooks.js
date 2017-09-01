import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchResults from './SearchResults'


class SearchBooks extends Component {
    state = {
        query: '',
        books: [],
        booksInShelf: []
    }
    componentDidMount() {
        BooksAPI.getAll().then((booksInShelf) => {
            this.setState({ booksInShelf })
        })
    }
    updateQuery = (query) => {
        if(query) {
            BooksAPI.search(query, 100).then((books) => {
                this.setState({books})
                console.log(books)
            })
        }
        else {
            this.setState({books: []})
        }

        this.setState({query})
    }
    putToShelf = (book, event) => {
        const updatedShelf = event.target.value

        let books = this.state.books

        books.forEach((element, index) => {
            if (element.id === book.id) {
                books[index].shelf = updatedShelf
            }
        })
        BooksAPI.update(book, updatedShelf)

        BooksAPI.getAll().then((booksInShelf) => {
            this.setState({booksInShelf, books})
        })
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <SearchResults books={this.state.books} booksInShelf={this.state.booksInShelf} putToShelf={this.putToShelf}/>
                </div>
            </div>
        )
    }
}

export default SearchBooks;