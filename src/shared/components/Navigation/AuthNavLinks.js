import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';

import {AuthContext} from '../../context/auth-context';
import './NavLinks.css';
import Button from "@material-ui/core/Button";
// import Button from "../FormElements/Button";


const AuthNavLinks = props => {
    const auth = useContext(AuthContext);
    return (
        <div>

            {!auth.isLoggedIn && (
                <NavLink className="button" to="/auth">
                    LOGIN
                </NavLink>
            )}
            {auth.isLoggedIn && (
                // <NavLink className="button" to="/auth" onClick={auth.logout}>
                //     LOGOUT
                // </NavLink>
            <Button color="secondary" to="/auth" onClick={auth.logout}>
                LOGOUT
            </Button>
            )}
        </div>
    );
};

export default AuthNavLinks;
