import React, { Component } from "react";

export class F1 extends Component {
  state={
    error:''
   }
  continue = (e) => {
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
          }
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
        const { firstName, lastName, email,state,pincode,mobile, bio,colledgeName,course,cgpa}  = this.props
    // this.props.values;
    return (
      <React.Fragment>
        {/* <h2>Welcome to the Ninjas Family!</h2> */}
        <div>
          <img
            src="https://files.codingninjas.in/ft-onboarding-welcome-msg-5707.svg"
            alt="error"
          />
        </div>

        <h2>Personal Details</h2>
        {/* <div>Occupation</div> */}
        <input
          className="form-entroll-page-input"
          type="text"
          placeholder="Enter State"
          onChange={handleChange('state')}
        />
        <span style={{color:"red"}}>{this.state.error}</span>
        <input
          className="form-entroll-page-input"
          type="number"
          placeholder="Pin-Code"
          onChange={handleChange('pincode')}
        />
        <span style={{color:"red"}}>{this.state.error}</span>
        <input
          type="number"
          placeholder="Mobile No"
          className="form-entroll-page-input"
          onChange={handleChange('mobile')}
        />
        <br />
        <span style={{color:"red"}}>{this.state.error}</span>
        <input
          placeholder="Enter Your Bio"
          className="form-entroll-page-input"
          onChange={handleChange('bio')}
        />
        <br />
        <span style={{color:"red"}}>{this.state.error}</span>
        <div>
          <button
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          >
            Next
          </button>

          <button
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          >
            Back
          </button>
        </div>
      </React.Fragment>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default F1;
