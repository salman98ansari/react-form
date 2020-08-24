import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class sucess extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Sucess"/>
                    <h1>
                        Thankyou for your submission..
                    </h1>
                    <p>Have a nice day 😊</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default sucess;
