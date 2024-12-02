import React from 'react';
import ReactDom from 'react-dom/client';
import BooksContext from './context/books';
import App from './App';
import './index.css';

const el = document.getElementById('root');
const root = ReactDom.createRoot(el);

root.render(
    <BooksContext.Provider value={5}>
        <App />
    </BooksContext.Provider>
);