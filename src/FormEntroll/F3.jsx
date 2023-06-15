import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export class F3 extends Component {
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
        const { values: { firstName, lastName, email, occupation, city, bio } } = this.props
        // this.props.values;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <h2>Confirm User Data</h2>
                    <List>
                        <ListItem
                            primaryText = "First Name"
                            secondaryText = { firstName }
                        />
                        <ListItem
                            primaryText = "Last Name"
                            secondaryText = { lastName }
                        />
                        <ListItem
                            primaryText = "Email"
                            secondaryText = { email }
                        />
                        <ListItem
                            primaryText = "Occupation"
                            secondaryText = { occupation }
                        />
                        <ListItem
                            primaryText = "City"
                            secondaryText = { city }
                        />
                        <ListItem
                            primaryText = "Bio"
                            secondaryText = { bio }
                        />
                    </List>
                    <RaisedButton 
                        label='Confirm & Continue'
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton 
                        label='Back'
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = { 
    button: {
        margin: 15
    }
}

export default F3;
