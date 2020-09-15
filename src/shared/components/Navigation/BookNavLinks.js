import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';

import {AuthContext} from '../../context/auth-context';
import './NavLinks.css';

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from '@material-ui/core/ListItemText';

const BookNavLinks = props => {
    const auth = useContext(AuthContext);

    return (
        <List className="nav-links" >
            {auth.isLoggedIn && (
                <ListItem button dense>
                    <NavLink to={`/${auth.userId}/books`}>MY BOOKS</NavLink>
                </ListItem>
            )}
            {auth.isLoggedIn && (
                <ListItem button dense>
                    <NavLink to="/books/new">ADD A BOOK</NavLink>
                </ListItem>
            )}
        </List>

    );
};

export default BookNavLinks;
