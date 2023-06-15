import React, { Component } from "react";

export class F1 extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
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
        />
        <input
          className="form-entroll-page-input"
          type="number"
          placeholder="Pin-Code"
        />
        <input
          type="number"
          placeholder="Mobile No"
          className="form-entroll-page-input"
        />
        <br />
        <input
          placeholder="Enter Your Bio"
          className="form-entroll-page-input"
        />
        <br />
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
