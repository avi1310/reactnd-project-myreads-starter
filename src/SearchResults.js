import  React, {Component} from 'react'
import PropTypes from 'prop-types';

class SearchResults extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        booksInShelf: PropTypes.array.isRequired,
        putToShelf: PropTypes.func.isRequired
    }

    render() {
        let books
        const booksInShelf = this.props.booksInShelf
        if(this.props.books) {
            books = this.props.books
            booksInShelf.forEach((element) => {
                books.forEach((book) => {
                    if(!book.shelf) {
                        if (element.id === book.id) {
                            book.shelf = element.shelf
                        }
                    }
                })
            })
        }
        else
            books = []

        const length = books.length
        return (
            <ol className="books-grid">
                {(length) ? (
                    books.map((book) => (
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                    {book.imageLinks && (
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>)}
                                    <div className="book-shelf-changer">
                                        <select value={(book.shelf ? book.shelf:"none")} onChange={(event) => this.props.putToShelf(book, event)}>
                                            <option value="none" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                {book.authors && (
                                    <div className="book-authors">{book.authors.map((author) => <p className="book-author" key={author}>{author}</p>)}</div>)}
                            </div>
                        </li>)
                    )):(
                    <div>No Search Results</div>
                )}
            </ol>

        )
    }
}

export default SearchResults