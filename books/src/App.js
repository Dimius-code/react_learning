import {useState} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {

    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        const upadatedBooks = [
            ...books,
            {
                id: Math.round(Math.random() * 9999),
                title
            }
        ];
        setBooks(upadatedBooks);
    };

    const deleteBook = (id) => {
        const filteredBooks = books.filter(
            (book) => {
                return book.id !== id
            });
        setBooks(filteredBooks);
    }

    return (
        <div>
            <BookList books={books} onDelete={deleteBook} />
            <BookCreate onCreate={createBook} />
        </div>
    )
}

export default App;