import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';

import {AuthContext} from '../../context/auth-context';
import './NavLinks.css';

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from '@material-ui/core/ListItemText';

const GeneralNavLinks = props => {
    return (
        <List className="nav-links">
            <ListItem button dense>
                <NavLink to="/" exact>
                   MAIN PAGE
                </NavLink>
            </ListItem>
            <ListItem button dense>
                <NavLink to="/" exact>
                    ALL USERS
                </NavLink>
            </ListItem>
            <ListItem button dense>
                <NavLink  to="/" exact>
                    TOP BOOKS
                </NavLink>
            </ListItem>
        </List>
    );
};

export default GeneralNavLinks;
