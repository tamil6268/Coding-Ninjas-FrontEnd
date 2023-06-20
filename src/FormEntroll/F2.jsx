import React, { Component } from 'react'

export class F2 extends Component {
   state={
    error:''
   }
    continue = e => {
        e.preventDefault();
        if(!this.props.values.firstName || !this.props.values.exp || !this.props.values.lastName || !this.props.values.email){
            this.setState({
                error:'Required*'
            })
            console.log(this.state.error)
        }else{
            this.props.nextStep();
            this.setState({
                error:''
            })
        }
        
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
                   <div><input type="radio" name="student" value="student" onChange={handleChange('exp')}/>I Am the Student</div>
                    <div><input type="radio" name="student" value="Experienced" onChange={handleChange('exp')}/>I am Experienced Person</div>
                   </div>
                   <span style={{color:"red"}}>{this.state.error}</span>
                    <input
                        placeholder='Enter Your First Name'
                        className="form-entroll-page-input"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br/>
                    <span style={{color:"red"}}>{this.state.error}</span>
                    <input
                        placeholder='Enter Your Last Name'
                        className="form-entroll-page-input"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                    <br/>
                    <span style={{color:"red"}}>{this.state.error}</span>
                    <input
                        placeholder='Enter Your Email'
                        className="form-entroll-page-input"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />
                    <br/>
                    <span style={{color:"red"}}>{this.state.error}</span>
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
