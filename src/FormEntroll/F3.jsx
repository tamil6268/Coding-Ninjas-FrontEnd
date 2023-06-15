import React, { Component } from 'react'
import '../App.css'
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
                    <h2>College Information:</h2>
                    <input type="text" className="input-box" placeholder="College Name"/>
                    <input type="text" className="input-box" placeholder="Course"/>
                    <input type="date" className="input-box" placeholder="Graduation Year"/>
                    <input type="text" className="input-box" placeholder=""/>
                    <input type="text" className="input-box" placeholder="College Name"/>
                    <button 
                        placeholder='Confirm & Continue'
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                >Submit</button>
                    <button 
                        placeholder='Back'
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                >Back</button>
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
