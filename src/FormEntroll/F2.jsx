import React, { Component } from 'react'

export class F2 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props;
        // this.props.values;
        return (
                <React.Fragment>
                    <h2>Welcome to the Ninjas Family!</h2>
                    <div>
                        <img src="https://files.codingninjas.in/ft-onboarding-welcome-msg-5707.svg"alt="error"/>
                    </div>
                   <div style={{display:"flex",alignItems:"Center",color:"gray"}}>
                   <div><input type="radio" name="student"/>I Am the Student</div>
                    <div><input type="radio" name="student"/>I am Experienced Person</div>
                   </div>
                    <input
                        placeholder='Enter Your First Name'
                        floatingLabelText='First Name'
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br/>
                    <input
                        placeholder='Enter Your Last Name'
                        floatingLabelText='Last Name'
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                    <br/>
                    <input
                        placeholder='Enter Your Email'
                        floatingLabelText='Email'
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />
                    <br/>
                    <button 
                        label='Continue'
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    >Next</button>
                </React.Fragment>
        )
    }
}

const styles = { 
    button: {
        margin: 15
    }
}

export default F2;
