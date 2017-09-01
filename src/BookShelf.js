import  React, {Component} from 'react'
import PropTypes from 'prop-types'

function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
        return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
}

class BookShelf extends Component {

    static propTypes = {
        books : PropTypes.array.isRequired,
        type: PropTypes.string.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    }
    render() {
        const shelfType = camelize(this.props.type)
        let booksInShelf = this.props.books.filter((book) =>
            book.shelf === shelfType
        )
        console.log(booksInShelf)
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.type}</h2>
                {booksInShelf.length ? (
                    <div className="bookshelf-books">
                    <ol className="books-grid">
                    {booksInShelf.map((book) =>
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                    <div className="book-shelf-changer">
                                        <select value={shelfType} onChange={(event) => this.props.onChangeShelf(book, event)}>
                                            <option value="none" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors.map((author) => <p className="book-author" key={author}>{author}</p>)}</div>
                            </div>
                        </li>
                    )}
                    </ol>
                    </div>
                ) : (
                    <div>{this.props.type} is empty</div>
                )}
            </div>
        )
    }
}

export default BookShelf