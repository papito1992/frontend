import React from 'react';
import ReactDOM from 'react-dom';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import './index.css';
import App from './App';
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import grey from "@material-ui/core/colors/grey";
import blue from "@material-ui/core/colors/blue";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[800]
        },
        // secondary: {
        //     main: blue[500],
        //     light: blue[200],
        //     dark: blue[900],
        // },
        // type: "light"
        // type: "dark"
    },
});
ReactDOM.render(
    <MuiThemeProvider theme={theme}>
    <App />
    </MuiThemeProvider>
    , document.getElementById('root'));
