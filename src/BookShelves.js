import  React, {Component} from 'react'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'

class BookShelves extends Component {
    state = {
        books: []
    }
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }
    changeShelf = (book, event) => {
        const updatedShelf = event.target.value
        let books = this.state.books

        books.forEach((element, index) => {
            if(element.id === book.id) {
                books[index].shelf = updatedShelf
            }
        })

        this.setState({books})
        BooksAPI.update(book, updatedShelf)
    }

    render() {
        return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf type="Currently Reading" books={this.state.books} onChangeShelf={this.changeShelf} />
                    <BookShelf type="Want to Read" books={this.state.books} onChangeShelf={this.changeShelf} />
                    <BookShelf type="Read" books={this.state.books} onChangeShelf={this.changeShelf} />
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
        )
    }
}

export default BookShelves;