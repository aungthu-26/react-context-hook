import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
    // const { addBook } = useContext(BookContext);
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // addBook(title, author);
        dispatch({ type: 'ADD_BOOK', book: { title, author } })
        setTitle('');
        setAuthor('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Book Title' value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type='text' placeholder='Author' value={author} onChange={(e) => setAuthor(e.target.value)} required />
            <input type='submit' value="Add Book" />
        </form>
    )
}

export default NewBookForm;