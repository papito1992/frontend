import React from 'react';
import './BookList.css';
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import BookItem from "./BookItemTest"
import Grid from "@material-ui/core/Grid";

const BookList = props => {
//     return (
//         <div>
//             <test/>
//         </div>
//     );
// };
    if (props.items.length === 0) {
        return (
            <div className="place-list center">
                <Card>
                    <h2>No books found. Maybe add one?</h2>
                    <Button to="/books/new">No books? Add here!</Button>
                </Card>
            </div>
        );
    }

    return (
        <ul className="place-list">
            <Grid container spacing={40} >
            {props.items.map(book => (
                <Grid item md={4} style={{paddingRight: 10}}>
                <BookItem
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    description={book.description}
                    creatorId={book.creator}
                    onDelete={props.onDeleteBook}
                />
                </Grid>
            ))}
            </Grid>
        </ul>
    );
};
export default BookList;
