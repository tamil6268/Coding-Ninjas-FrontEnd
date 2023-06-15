import React, { Component } from 'react'
import '../App.css'
import {Link} from 'react-router-dom';
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
                <React.Fragment>
                    {/* <h2>Welcome to the Ninjas Family!</h2> */}
                    <div>
                        <img src="https://files.codingninjas.in/ft-onboarding-welcome-msg-5707.svg"alt="error"/>
                    </div>
                  
                    <h2>College Information:</h2>
                    <input type="text" className="form-entroll-page-input" placeholder="College Name"/>
                    {/* <input type="text" className="form-entroll-page-input" placeholder="Course"/> */}
                    <select className="form-entroll-page-input" placeholder='Select Course'>
                        <option value="">--Select Course--</option>
                        <option value="B.E/B.Tech">B.E/B.Tech</option>
                        <option value="M.E/M.Tech">M.E/M.Tech</option>
                        <option value="B.sc">B.sc</option>
                        <option value="M.sc">M.sc</option>
                        <option value="others">others</option>
                    </select>
                    <input type="date" className="form-entroll-page-input" placeholder="Graduation Year"/>
                    <input type="number" className="form-entroll-page-input" placeholder="CGPA"/>
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
