import  React, {Component} from 'react'
import BookShelf from './BookShelf'

class BookShelves extends Component {

    render() {
        return (
            <div>
                <BookShelf title="Currently Reading"/>
                <BookShelf title="Want to Read"/>
                <BookShelf title="Read"/>
            </div>
        )
    }
}

export default BookShelves;