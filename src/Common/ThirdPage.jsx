import {useState} from 'react';
function ThirdPage() {
    const [toggle,setToggle] =useState(false);
    const openPopUp=()=>{
        setToggle(true)
    }
    const closePopUp=()=>{
        setToggle(false)
    }
  return (
    <div id="media-responsive-new-id-third-page-whole">
      <div id="Why-to-join-us">
        <div className="join-third-Page1">
          <button className="join-btn-third-page">Why Join Us?</button>
          <h2 className="content-below-join-btn">
            Great students deserve the best jobs
          </h2>
          <div>Coding Ninjas Makes it Happen...</div>
        </div>
        <div className="join-third-Page2">
          <div className="position-hex-top">
            <div className="hex-box1">
              <div className="big-font-size-thirdPage">150+</div>
              <div className="small-font-size-thirdPage">
                Students working in FAANG
              </div>
            </div>
            <div className="hex-box1">
              <div className="big-font-size-thirdPage">10</div>
              <div className="small-font-size-thirdPage">
                Students started their own companies
              </div>
            </div>
          </div>
          <div className="position-hex-bottom">
            <div className="hex-box2">
              <div className="big-font-size-thirdPage">50+</div>
              <div className="small-font-size-thirdPage">
                Students having 5 Stars on CodeChef
              </div>
            </div>
            <div className="hex-box2">
              <div className="big-font-size-thirdPage">100+</div>
              <div className="small-font-size-thirdPage">
                Students received International Job Offers
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="sub-head-third-page">Our students are placed at</div>
      <div className="third-page-company-connects">
        <img
          src="https://files.codingninjas.in/google-9542.svg"
          alt="404 Error"
          className="company-media-responsive"
        />
        <img
          src="https://files.codingninjas.in/microsoft-9541.svg"
          alt="404 Error"
          className="company-media-responsive"
        />
        <img
          src="https://files.codingninjas.in/adobe-9540.svg"
          alt="404 Error"
          className="company-media-responsive"
        />
        <img
          src="https://files.codingninjas.in/walmart-9539.svg"
          alt="404 Error"
          className="company-media-responsive"
        />
        <img
          src="https://files.codingninjas.in/amazon-9538.svg"
          alt="404 Error"
          className="company-media-responsive"
        />
        <img src="https://files.codingninjas.in/oyo-9537.svg" alt="404 Error" />
        <img
          src="https://files.codingninjas.in/flipkart-9536.svg"
          alt="404 Error"
          className="company-media-responsive"
        />
        <img
          src="https://files.codingninjas.in/morganstanley-9535.svg"
          alt="404 Error"
          className="company-media-responsive"
        />
        <img
          src="https://files.codingninjas.in/samsung-9534.svg"
          alt="404 Error"
          className="company-media-responsive"
        />
        <img
          src="https://files.codingninjas.in/expedia-9533.svg"
          alt="404 Error"
          className="company-media-responsive"
        />
        <img
          src="https://files.codingninjas.in/facebook-9532.svg"
          alt="404 Error"
          className="company-media-responsive"
        />
      </div>
      <div className="report-btn">
        <button className="placement-report-btn" onClick={openPopUp}>
          Download Placement Reports
        </button>
      </div>
      {toggle && <div id="popup-box">
          <div className="head-btn-report">
            <h2>Download Placement report</h2>
            <div className="font-close-report" onClick={closePopUp}>x</div>
          </div>
          <div className="head-btn-report-below-form">
            <form id="Report-form">
                 <div className="title-form">Fill in details below</div>
                 <input type="text" placeholder="Full Name"/>
                 <input type="email" placeholder="Email Address"/>
                 <input type="number" placeholder="Phone Number"/>
                 <button className="btn-form-report" disabled>Download Placement report</button>
            </form>
          </div>
      </div>}
    </div>
  );
}
export default ThirdPage;
