import "../Common/Course.css";
import '../App.css';
import NavBar from "../Components/NavBar.jsx";
import Footer from "../Components/Footer.jsx";
import FifthPage from "../Common/FifthPage.jsx";
import {useNavigate} from 'react-router-dom';
import BoxCourse from '../Components/BoxCourse.jsx'
const StartLearning = () => {
  const [BoxCourse1, setBoxCourse1] = useState("one");
  const data = {
    course:"MERN",
    h1: "Full Stack",
    h2: "MERN Full Stack Web Development",
    url: "https://files.codingninjas.com/mern-22525.png",
    price: "499900",
    detailhead: "Full Stack Web Development Course — MERN Stack",
    detailcontent:
      "Learn to build entire web applications from start to finish on one of the most versatile tech stacks : MongoDB, Express.js, React.js and Node.js (MERN stack)",
    detailurl:
      "https://files.codingninjas.com/cdn-cgi/image/width=434/mern-9588-1-10374.png"
  };
  const data1 = [
    {
      course:"DSA",
      h1: "Data structures and algorithms",
      h2: "Basics of C++ with Data Structures and Algorithms",
      url: "https://files.codingninjas.com/c-11714.svg",
      price: "399900",
      detailhead:"Basics of C++ with Data Structures and Algorithms",
      detailcontent:"This is the course to pick if you are just getting into coding and want to build a strong foundation. Widely used in competitive programming.",
      detailurl:"https://files.codingninjas.com/cdn-cgi/image/width=434/c-10823.png"
    },
    {
      course:"MERN",
    h1: "Full Stack",
    h2: "MERN Full Stack Web Development",
    url: "https://files.codingninjas.com/mern-22525.png",
    price: "499900",
    detailhead: "Full Stack Web Development Course — MERN Stack",
    detailcontent:
      "Learn to build entire web applications from start to finish on one of the most versatile tech stacks : MongoDB, Express.js, React.js and Node.js (MERN stack)",
    detailurl:
      "https://files.codingninjas.com/cdn-cgi/image/width=434/mern-9588-1-10374.png"
    },
    {
      course:"Compatative_Programs",
      h1: "Compatative Programings",
      h2: "Compatative Programings Course",
      url: "https://files.codingninjas.com/competitive-programming-11703.svg",
      price: "459900",
      detailhead:"Basics of Codings and Comapative Programs",
      detailcontent:"This is the course to pick if you are just getting into coding and want to build a strong foundation. Widely used in competitive programming.",
      detailurl:"https://files.codingninjas.com/cdn-cgi/image/width=434/c-10823.png"
    }
  ];

  const data2 = [
    {
      h1: "Compatative Programings",
      h2: "Compatative Programings Course",
      url: "https://files.codingninjas.com/competitive-programming-11703.svg",
      price: "459900"
    }
  ];
  const data3 = [
    {
      h1: "OS",
      h2: "Operating System",
      url: "https://files.codingninjas.com/operating-system-12696.svg",
      price: "299900"
    },
    {
      h1: "DBMS",
      h2: "Data Management System",
      url: "https://files.codingninjas.com/os-dbms-12694.svg",
      price: "349900"
    },
    {
      h1: "",
      h2: "System Design For Proffesinals",
      url: "https://files.codingninjas.com/system-design-12695.svg",
      price: "459900"
    }
  ];
  const data4 = [
    {
      h1: "python",
      h2: "DataScience Jupitar",
      url: "https://files.codingninjas.com/data-science-11708.svg",
      price: "299900"
    },
    {
      h1: "DA/DS",
      h2: "Data Analyst Proffesionals",
      url: "https://files.codingninjas.in/group-7241-15644.png",
      price: "349900"
    },
    {
      h1: "",
      h2: "Machine Learning Course",
      url: "https://files.codingninjas.com/ml-11707.svg",
      price: "459900"
    }
  ];

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
      <div id="onclick-scroll-page-fourth-page">
          <div className="scroll-page-title">Courses specially curated for</div>
          <div className="scroll-page-sub-title">
            Having work experience{" "}
            <span
              className="Edit-Experience-pencil"
              onClick={() => setOnclickToggle(false)}
            >
              {" "}
              Edit preference<i className="fa-solid fa-pencil"></i>
            </span>
          </div>
          <div className="scroll-page-title">
            Recommended courses for professionals
          </div>
            <div>
              <div className="Display-for-box-container">
                <BoxCourse data={data}/>
                <BoxCourse data={data} />
              </div>

              <div className="scroll-page-title">All courses for students</div>

              <div>
                <button
                  className="hover-effect-child1"
                  onClick={() => setBoxCourse1("one")}
                >
                  Data structures and algorithms
                </button>
                <button
                  className="hover-effect-child1"
                  onClick={() => setBoxCourse1("two")}
                >
                  Competitive Programming
                </button>
                <button
                  className="hover-effect-child1"
                  onClick={() => setBoxCourse1("three")}
                >
                  Interview Preparation
                </button>
                <button
                  className="hover-effect-child1"
                  onClick={() => setBoxCourse1("four")}
                >
                  Analytics & Data Science
                </button>
                <button
                  className="hover-effect-child1"
                  onClick={() => setBoxCourse1("five")}
                >
                  Web Development
                </button>
              </div>
              {BoxCourse1 == "one" && (
                <div className="Display-for-box-container">
                  {data1.map((item, index) => {
                    return (
                      <div key={index}>
                        <BoxCourse data={item} />
                      </div>
                    );
                  })}
                </div>
              )}
              {BoxCourse1 == "two" && (
                <div className="Display-for-box-container">
                  {data2.map((item, index) => {
                    return (
                      <div key={index}>
                        <BoxCourse data={item} />
                      </div>
                    );
                  })}
                </div>
              )}
              {BoxCourse1 == "three" && (
                <div className="Display-for-box-container">
                  {data3.map((item, index) => {
                    return (
                      <div key={index}>
                        <BoxCourse data={item} />
                      </div>
                    );
                  })}
                </div>
              )}
              {BoxCourse1 == "four" && (
                <div className="Display-for-box-container">
                  {data4.map((item, index) => {
                    return (
                      <div key={index}>
                        <BoxCourse data={item} />
                      </div>
                    );
                  })}
                </div>
              )}
              {BoxCourse1 == "five" && (
                <div className="Display-for-box-container">
                  <BoxCourse data={data} />
                  <BoxCourse data={data2} />
                </div>
              )}
              {/* <button className=""style={{backgroundColor:"green",color:"white",marginTop:"10px"}} onClick={()=>paymentFunc(data||data1||data2||data3)}>Proceed Payment</button> */}
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
