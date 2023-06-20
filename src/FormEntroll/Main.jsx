import React, { Component } from 'react';
import F2 from './F2';
import F1 from './F1';
import F3 from './F3';

export class Main extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        state:'',
        pincode:'',
        mobile:'',
        bio: '',
        colledgeName:'',
        course:'',
        cgpa:''
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
    //     let errorMessage = {};
    // if (!this.props.values.firstName) {
    //   errorMessage.Name = "Should be contain(5-12) letters";
    // } else {
    //   errorMessage.Name = "";
    // }

    // if (!validate.Email.test(userData.Email)) {
    //   errorMessage.Email = "should be valid Email(eg: abc@gmail.com)";
    // } else {
    //   errorMessage.Email = "";
    // }

    // if (!validate.Password.test(userData.Password)) {
    //   errorMessage.Password = "password lenght(6-12)";
    // } else {
    //   errorMessage.Password = "";
    // }
    // if (!validate.Contact.test(userData.Contact)) {
    //   errorMessage.Contact = "should be 10 digit number";
    // } else {
    //   errorMessage.Contact = "";
    // }

    // if (Object.keys(errorMessage).length > 0) {
    //   setError(errorMessage);
    //   return;
    // }
    }
   
    render() {
        const { step } = this.state;
        const {exp, firstName, lastName, email,state,pincode,mobile, bio,colledgeName,course,cgpa } = this.state;
        const values = {exp, firstName, lastName, email,state,pincode,mobile, bio,colledgeName,course,cgpa }
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
        }
    }
}

export default Main;
