import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';

import {AuthContext} from '../../context/auth-context';
import './NavLinks.css';

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from '@material-ui/core/ListItemText';
import makeStyles from "@material-ui/core/styles/makeStyles";
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        // maxWidth: 360,
        // backgroundColor: theme.palette.background.paper,
    },
    // nested: {
    //     paddingLeft: theme.spacing(4),
    // },
}));
const NavLinks = props => {
    const classes = useStyles();
    const auth = useContext(AuthContext);

    return (
        <List className="nav-links">
            {auth.isLoggedIn && (
                <ListItem button dense>
                    <NavLink to={`/${auth.userId}/places`}>MY PLACES</NavLink>
                </ListItem>
            )}
            {auth.isLoggedIn && (
                <ListItem button dense>
                    <NavLink to="/places/new">ADD PLACE</NavLink>
                </ListItem>
            )}
        </List>
    );
};

export default NavLinks;
