import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import BookList from "../components/BookList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import {useHttpClient} from "../../shared/hooks/http-hook";

const UserBooks = () => {
    const [loadedBooks, setLoadedBooks] = useState();
    const {isLoading, error, sendRequest, clearError} = useHttpClient();

    const userId = useParams().userId;

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const responseData = await sendRequest(
                    `http://localhost:5000/api/books/user/${userId}`
                );
                setLoadedBooks(responseData.books);
            } catch (err) {
            }
        };
        fetchBooks();
    }, [sendRequest, userId]);

    // console.log(loadedBooks)
    // loadedBooks.foreach(test => {console.log(test.description)})
// console.log(loadedBooks)
    const bookDeletedHandler = deletedBookId => {
        console.log(loadedBooks);
        setLoadedBooks(prevBooks =>
            prevBooks.filter(book => book.id !== deletedBookId)
        );
        console.log(loadedBooks);

    };

    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError}/>
            {isLoading && (
                <div className="center">
                    <LoadingSpinner/>
                </div>
            )}
            {!isLoading && loadedBooks && (
                <BookList items={loadedBooks} onDeleteBook={bookDeletedHandler}/>
            )}
        </React.Fragment>
    );
};
export default UserBooks;
