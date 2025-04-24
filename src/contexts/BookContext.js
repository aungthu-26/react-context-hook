import React, { createContext, useEffect, useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    // using useState
    // const [books, setBooks] = useState([
    //     { title: 'test1', author: 'test1', id: 1 },
    //     { title: 'test2', author: 'test2', id: 2 }
    // ]);

    //using useReducer

    const [books, dispatch] = useReducer(bookReducer, [], () => {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
    });

    //using with useState
    // const addBook = (title, author) => {
    //     setBooks([...books, { title, author, id: uuidv4() }])
    // };

    // const removeBook = (id) => {
    //     setBooks(books.filter(book => book.id !== id));
    // }

    /*add data to localStorage */
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books])

    return (
        //using with useState
        // <BookContext.Provider value={{ books, addBook, removeBook }}>
        //     {props.children}
        // </BookContext.Provider>

        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;