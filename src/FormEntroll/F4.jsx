import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import AppBar from 'material-ui/AppBar'
import {Link} from "react-router-dom";

export class F4 extends Component {
    continue = e => {
        e.preventDefault();
        //Process form//
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Link to="/">Proceed</Link>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


export default F4;
