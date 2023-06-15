import "../Common/Course.css";
import NavBar from "../Components/NavBar.jsx";
import Footer from "../Components/Footer.jsx";
import FifthPage from "../Common/FifthPage.jsx";
import {useNavigate} from 'react-router-dom';
const StartLearning = () => {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate('/app/onboarding')
  }
  return (
    <div className="whole-container-course">
      <div className="Course-nav-page">
        <NavBar />
      </div>
      <div className="new-start-learning-container parent-box-course">
        <div className="child-box-course">
          <div className="head-title-child-course">SKILL MATTERS</div>
          <div className="sub-head-title-child-course">
            Start Learning for free
          </div>
          <div>
            Built in-demand tech skills with our free courses. Get access to 10+
            expert led popular courses
          </div>

          <button style={{width:"230px",backgroundColor:"orange",fontSize:"18px",height:"50px",color:'white'}} onClick={handleClick}>
            Get Started
          </button>
        </div>
        <div className="child-box-course">
          <img
            className="img-course-seperate-page"
            src="https://files.codingninjas.in/start-learning-banner-12107.png"
            alt="img"
          />
        </div>
      </div>
      <div style={{ color: "black" }} className="media-fifth-page-course">
        <FifthPage />
      </div>
      <div className="footer-media-course-page">
        <Footer />
      </div>
    </div>
  );
};
export default StartLearning;
