import React, { Component } from 'react'

export class F1 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;
        // this.props.values;
        return (
                <React.Fragment>
                    <h2>Enter Personal Details</h2>
                    <input
                        placeholder='Enter Your Occupation '
                        floatingLabelText='Occupation'
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
                    />
                    <br/>
                    <input
                        placeholder='Enter Your City'
                        floatingLabelText='City'
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                    />
                    <br/>
                    <input
                        placeholder='Enter Your Bio'
                        floatingLabelText='Bio'
                        onChange={handleChange('bio')}
                        defaultValue={values.bio}
                    />
                    <br/>
                    <div>
                    <button 
                        label='Continue'
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}>Next</button>
                   
                    <button 
                        label='Back'
                        primary={false}
                        style={styles.button}
                        onClick={this.back}>Back</button>
                    </div>
                </React.Fragment>
        )
    }
}

const styles = { 
    button: {
        margin: 15
    }
}

export default F1;
