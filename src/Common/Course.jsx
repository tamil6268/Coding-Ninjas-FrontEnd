import "./Course.css";
import CourseMap from './CourseMap.jsx' 
import NavBar from "../Components/NavBar.jsx";
import Footer from '../Components/Footer.jsx';
import FifthPage from '../Common/FifthPage.jsx';
import {useEffect} from 'react';
import { useParams,useLocation } from 'react-router-dom';
const Course = () => {
    const params=useParams();
    const location=useLocation();
    console.log(params)
    const state=location.state.data;
    useEffect(()=>{

    },[state])
  return (
    <div className="whole-container-course">
      <div className="Course-nav-page">
        <NavBar />
      </div>
      <CourseMap data={state}/>

      <div style={{color:"black"}} className="media-fifth-page-course">
      <FifthPage/>
      </div>
      <div className="footer-media-course-page">
      <Footer/>
      </div>
    </div>
  );
};
export default Course;
