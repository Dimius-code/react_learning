import { useState, useContext } from 'react';
import BooksContext from '../context/books';
import BookEdit from './BookEdit';

function BookShow({book}) {

    const [showEdit, setShowEdit] = useState(false);
    const { deleteBookById } = useContext(BooksContext);

    const handleDeleteClick = () => {
        deleteBookById(book.id);
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = () => {
        setShowEdit(false);
    }

    let content = book.title;

    if(showEdit) {
        content = (
            <BookEdit 
                book={book} 
                onSubmit={handleSubmit} 
            />
        )
    }

    return (
        <div className="book-show">
            <img
                alt="books"
                src={`https://picsum.photos/seed/${book.title}/200/300`} 
            />
            <div>
                {content}
            </div>
            <div className="actions">
                <button
                    className="edit"
                    onClick={handleEditClick}
                >
                    Edit
                </button>
                <button 
                    className="delete"
                    onClick={handleDeleteClick}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default BookShow;