import React, { Component } from 'react'
import '../App.css'
import {Link} from 'react-router-dom';
import axios from 'axios';

export class F3 extends Component {
 state={
    error:''
   }
    continue = e => {
        e.preventDefault();
      if(!this.props.values.state || !this.props.values.pincode || !this.props.values.mobile || !this.props.values.bio){
              this.setState({
                  error:'Required*'
              })
              console.log(this.state.error)
          }else{
              this.props.nextStep();
              this.setState({
                  error:''
              })
              axios
              .post("https://heisen-tamil-codingninjas.onrender.com/User/Course/EntrolledUser", this.props)
              .then((res)=>{
                 console.log(res)
              })
              .catch((error)=>{
                 console.log(error)
              })
          }
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values, handleChange } = this.props;
        const { firstName, lastName, email,state,pincode,mobile, bio,colledgeName,course,cgpa}  = this.props
        return (
                <React.Fragment>
                    {/* <h2>Welcome to the Ninjas Family!</h2> */}
                    <div>
                        <img src="https://files.codingninjas.in/ft-onboarding-welcome-msg-5707.svg"alt="error"/>
                    </div>
                  
                    <h2>College Information:</h2>
                    <input type="text" className="form-entroll-page-input" placeholder="College Name" onChange={handleChange('colledgeName')}/>
                    {/* <input type="text" className="form-entroll-page-input" placeholder="Course"/> */}
                    <span style={{color:"red"}}>{this.state.error}</span>
                    <select className="form-entroll-page-input" placeholder='Select Course' onChange={handleChange('course')}>
                        <option value="">--Select Course--</option>
                        <option value="B.E/B.Tech">B.E/B.Tech</option>
                        <option value="M.E/M.Tech">M.E/M.Tech</option>
                        <option value="B.sc">B.sc</option>
                        <option value="M.sc">M.sc</option>
                        <option value="others">others</option>
                    </select>
                    <span style={{color:"red"}}>{this.state.error}</span>
                    <input type="date" className="form-entroll-page-input" placeholder="Graduation Year" />
                    <input type="number" className="form-entroll-page-input" placeholder="CGPA" onChange={handleChange('cgpa')}/>
                    <span style={{color:"red"}}>{this.state.error}</span>
                    <input type="date" className="form-entroll-page-input" placeholder="College End Date"/>
                    <div>
                    <button 
                        placeholder='Confirm & Continue'
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}><Link to="/app/onboarding/proceed">Submit</Link></button>
                    <button 
                        placeholder='Back'
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

export default F3;
