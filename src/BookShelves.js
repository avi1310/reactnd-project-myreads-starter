import  React, {Component} from 'react'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'

class BookShelves extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }


    render() {
        return (
            <div>
                <BookShelf title="Currently Reading" books={this.state.books} />
                <BookShelf title="Want to Read" books={this.state.books}/>
                <BookShelf title="Read" books={this.state.books}/>
            </div>
        )
    }
}

export default BookShelves;