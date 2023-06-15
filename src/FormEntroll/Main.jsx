import React, { Component } from 'react';
import F2 from './F2';
import F1 from './F1';
import F3 from './F3';
import F4 from './F4';

export class Main extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: '',
    }

    //proceed to the next react_step_form
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1 
        });
    }

    //Go back to previous page
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1 
        });
    }

    //Handle fields change

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio }

        switch(step) {
            case 1:
                return (
                    <F2
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <F1
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <F3
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 4:
                return (
                <div style={{display:"flex",alignItems:"center"}}><F4 /></div>
            )
        }
    }
}

export default Main;
