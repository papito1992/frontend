import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import NewBook from './places/pages/NewBook';
import UserBooks from "./places/pages/UserBooks";
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import UpdateBook from './places/pages/UpdateBook'
import Auth from './user/pages/Auth';
import AuthReset from './user/pages/AuthReset';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import {AuthContext} from './shared/context/auth-context';
import {useAuth} from './shared/hooks/auth-hook';
import BookReader69 from './places/components/BookReader69'
const App = () => {
    const {token, login, logout, userId} = useAuth();

    let routes;

    if (token) {
        routes = (
            <Switch>
                <Route path="/" exact>
                    <Users/>
                </Route>
                <Route path="/:userId/places" exact>
                    <UserPlaces/>
                </Route>
                <Route path="/:userId/books" exact>
                    <UserBooks/>
                </Route>
                <Route path="/places/new" exact>
                    <NewPlace/>
                </Route>
                <Route path="/books/new" exact>
                    <NewBook/>
                </Route>
                <Route path="/places/:placeId">
                    <UpdatePlace/>
                </Route>
                <Route path="/books/read/:bookId">
                    <BookReader69/>
                </Route>
                <Redirect to="/"/>
            </Switch>
        );
    } else {
        routes = (
            <Switch>
                <Route path="/" exact>
                    <Users/>
                </Route>
                <Route path="/:userId/places" exact>
                    <UserPlaces/>
                </Route>
                <Route path="/auth/reset/:token" exact>
                    <AuthReset/>
                </Route>
                <Route path="/auth">
                    <Auth/>
                </Route>
                <Redirect to="/auth"/>
            </Switch>
        );
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: !!token,
                token: token,
                userId: userId,
                login: login,
                logout: logout
            }}
        >
            <Router>
                <MainNavigation/>
                <main>{routes}</main>
            </Router>
        </AuthContext.Provider>
    );
};

export default App;
