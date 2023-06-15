import { useState } from "react";
import FifthPage from "./FifthPage.jsx";
import BoxCourse from "../Components/BoxCourse.jsx";
import SlideContent from "../Components/SlideContent.jsx";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import SlideContentMedia from "../Components/SlideContentMedia.jsx";
const FourthPage = () => {
  const [toggle, setToggle] = useState(true);
  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(true);
  const [input, setInput] = useState(true);
  const [onclickToggle, setOnclickToggle] = useState(true);
  const [BoxCourse1, setBoxCourse1] = useState("one");
  const [form, setForm] = useState({});
  const [error, setError] = useState({});

  const requestSendChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
    e.preventDefault();
    let errorMessage = {};
    let count = 0;
    if (!validate.Number.test(form.Number)) {
      errorMessage.Number = "should be 10 digit number";
    } else {
      count += 1;
      errorMessage.Number = "";
    }
    if (!validate.Name.test(form.Name)) {
      errorMessage.Name = "Should be contain(5-12) letters";
    } else {
      count += 1;
      errorMessage.Name = "";
    }

    if (!validate.Email.test(form.Email)) {
      errorMessage.Email = "should be valid Email(eg: abc@gmail.com)";
    } else {
      count += 1;
      errorMessage.Email = "";
    }
    if (!validate.Year.test(form.Graduateyear)) {
      errorMessage.Graduateyear = "year should be (1995-2023)";
    } else {
      count += 1;
      errorMessage.Graduateyear = "";
    }

    if (Object.keys(errorMessage).length > 0) {
      setError(errorMessage);
      return;
    }
  };
  const validate = {
    Number: /^[1-9]{10}$/,
    Name: /^[a-zA-Z]{5,12}$/i,
    Email: /^[a-zA-Z0-9]+@+gmail+.com/,
    Year: /^[1-9]{4}$/
  };
  const handleSubmitRequest = (e) => {
    e.preventDefault();
    let errorMessage = {};
    let count = 0;
    if (!validate.Number.test(form.Number)) {
      errorMessage.Number = "should be 10 digit number";
    } else {
      count += 1;
      errorMessage.Number = "";
    }
    if (!validate.Name.test(form.FirstName)) {
      errorMessage.Name = "Should be contain(5-12) letters";
    } else {
      count += 1;
      errorMessage.Name = "";
    }

    if (!validate.Email.test(form.Email)) {
      errorMessage.Email = "should be valid Email(eg: abc@gmail.com)";
    } else {
      count += 1;
      errorMessage.Email = "";
    }
    if (!validate.Year.test(form.Graduateyear)&&((form.Graduateyear>2023)||(1995>form.Graduateyear))) {
      errorMessage.Graduateyear = "year should be (1995-2023)";
    } else {
      count += 1;
      errorMessage.Graduateyear = "";
    }

    if (count == 4) {
      axios
        .post("https://heisen-tamil-codingninjas.onrender.com/requestCall", form)
        .then((res) => {
          toast("Successfully Request Submitted")
          console.log(res.data.message);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (Object.keys(errorMessage).length > 0) {
      setError(errorMessage);
      return;
    }
  };

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

  const handleClickBackward = () => {
    setToggle(true);
    setDisplay1(false);
    setDisplay2(true);
  };
  const handleClickForward = () => {
    setToggle(false);
    setDisplay1(true);
    setDisplay2(false);
  };

  const dataHover = [
    {
      url: "https://files.codingninjas.com/student-24426.png",
      one: "No work experience",
      two: "Designed as per college student schedule"
    },
    {
      url: "https://files.codingninjas.com/professional-24427.png",
      one: "Having work experience",
      two: "Designed as per working professional schedule"
    }
  ];
  return (
    <div id="fourth-page-whole">
      <ToastContainer />
      {/* <button onClick={notify}>Click ME</button> */}
      <div id="fourth-page">
        <div id="fourth-page-container">
          <div className="child-container">
            <div className="rating-fouth-page">4.9</div>
            <img
              className="five-Star"
              src="https://files.codingninjas.in/stars-9613.svg"
              alt="404 Error"
            />
            <div>100+ reviews</div>
            <img
              className="five-Star"
              src="https://files.codingninjas.in/fblogo-9599.svg"
              alt="404 Error"
            />
          </div>
          <div className="child-container">
            <div className="rating-fouth-page">4.8</div>
            <img
              className="five-Star"
              src="https://files.codingninjas.in/stars-9613.svg"
              alt="404 Error"
            />
            <div>1000+ reviews</div>
            <img
              className="five-Star"
              src="https://files.codingninjas.in/glogo-9600.svg"
              alt="404 Error"
            />
          </div>
          <div className="child-container last">
            <div className="rating-fouth-page">50+</div>
            <div>Questions asked</div>
            <div>5000 answered</div>
            <img
              className="five-Star"
              src="https://files.codingninjas.in/qlogo-9611.svg"
              alt="404 Error"
            />
          </div>
        </div>
      </div>
      <div className="big-Page-fourth-page">
        <div className="head1-fourth-page">A One stop Platform</div>
        <div className="head2-fourth-page">
          Practice and learn till you are perfect
        </div>
        <SlideContent />
      </div>
      {/* <button id="rzp-button1">Buy Course</button> */}
      {input && (
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

          {onclickToggle ? (
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
          ) : (
            <div className="drop-down-box">
              {dataHover.map((item, index) => {
                return (
                  <button
                    className="drop-down-one"
                    key={index}
                    onClick={() => setOnclickToggle(true)}
                  >
                    <img src={item.url} alt="img" />
                    <button className="second-sub-bar">
                      <div style={{ width: "100px" }}>{item.one}</div>
                      <img
                        className="second-sub-bar"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAACFCAMAAACaJK1BAAAAZlBMVEX///8AAAD6+vrw8PDNzc3z8/Pk5OTp6embm5vY2Njb29u7u7tpaWltbW22tratra1TU1MsLCwnJyeFhYV7e3tHR0cXFxehoaFAQECSkpJkZGQgICCLi4tycnLFxcVbW1sODg45OTnwBALrAAACw0lEQVRoge2a7ZKiMBBFCQiCKIio6KgI7/+Sk7UsV+Wr7w3Z2h85DzCnrLl0ujvxPIfD4XA4ZmWVppFdw3KvHpx9e45MvSgDS45cvbNe2XBE6ovtYn7Jz7dEqTad2bHqOjS7fNYM3HolSl3i+TKwHHBojte5vpzrsERzmyVq4ahD85OYS+IpiVL32lQy7dAcMqOoZdOGB20e8pKh/HYp+ETvxBKlmuuSkwCOP+ypDwf5JQ/WRKLl/5MXWzjR0nR90GaghZHoqlZBkpqzgO1APv33BiiBRC/ghL1AolYfaA3SDizutAZpBxLii3lSAO1AVNKaSyUvnsH5yGqOQPEMq4LVNHt5OxBmfNSARPv1ltb8o0QfUnnUklvDak5AOxCVdNR2QDsQxLRGAYn28wutQdqBjP5w/scanfCJXsstXkTX6ANg8YLxOWaYPWLx/IqzoE1nzrQDMSjxvBSP2haW6OLZM/aP0hASPfiDUaMkaDtASvT0f5ZXNVqiP5yqtS/R7cDauiTMT7Z/SQD0TqRieUXOTEoR7QEDJ1ltMIVqYAXRkaG1K5UG6h2sCpOtC3Ce+ILFWC/yk3FJD0jiMx4O1F82QsXC/iRRM4F6/gpZB+lnLa0oZakKK35XcZUND8jZ94V0XWkwAkknrYTP7FY4MxqMpXdZZk0GbGlmxQd3h6NwI2Gw9LicZZNocKZH910lC5TBIqoQ3kkYZPYk3EUbZFZaZ1d8nRVfrlKL9AfyvfCCVcTAhpszXHK5QXdSjOIE3gwTmwZhEXwDriMb4goVVNi/00IWzB/Iy0kBrMq/kH6KyIq0i0ghPbiHkNxiG7/LmLyPZ24vO4weVshVwhgjbySkB7eAwdcewoNbRP+7lQK9ep2g5/BF6+w0nbdE5pnt4fNm9mbpLdn7+64Z/9tfPF+qNcjBzZCkteU3dw6Hw+FwmPALcTYn04+rmekAAAAASUVORK5CYII="
                        width={10}
                        alt="forward"
                      />
                    </button>
                    <div className="second-sub-bar1">{item.two}</div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      <div className="big-Page-fourth-page1">
        <div className="query-fourth-page-container">
          <div className="first-one">Have any queries?</div>
          <div className="second-one">
            Get a free counselling session from our experts
          </div>
          <div className="third-one">
            <img
              src="https://files.codingninjas.in/call-icon-9597.svg"
              alt="404 Error"
            />
            <div className="third-sub-one">
              <div className="second-one">Call us on our toll free number</div>
              <div className="fourth-one-bold">1800-123-3598</div>
            </div>
          </div>
        </div>
        <button
          className="firstPage-btn-Explore media-btn"
          onClick={() => alert("Successfully Captured Your Requests")}
        >
          Request Callback
        </button>
        <form
          className="form-box-fourth-page-continue display-none-form-new"
          onClick={handleSubmitRequest}
        >
          <input
            className="input-box"
            type="number"
            placeholder="Contact Number*"
            name="Number"
            onChange={requestSendChange}
          />
          {
            <span className="error" style={{ color: "red" }}>
              {" "}
              {error.Number}
            </span>
          }
          <input
            className="input-box"
            type="text"
            placeholder="First Name*"
            name="FirstName"
            onChange={requestSendChange}
          />
          {
            <span className="error" style={{ color: "red" }}>
              {" "}
              {error.Name}
            </span>
          }
          <input
            className="input-box"
            type="email"
            placeholder="Email Address*"
            name="Email"
            onChange={requestSendChange}
          />
          {
            <span className="error" style={{ color: "red" }}>
              {" "}
              {error.Email}
            </span>
          }
          <input
            className="input-box"
            type="number"
            placeholder="Graduation Year*"
            name="Graduateyear"
            onChange={requestSendChange}
          />
          {
            <span className="error" style={{ color: "red" }}>
              {" "}
              {error.Graduateyear}
            </span>
          }
          <button className="firstPage-btn-Explore">Request Callback</button>
        </form>
      </div>

      <div className="news-updates">
        <h2>Coding Ninjas in the News</h2>
        {display1 && (
          <div className="backward" onClick={handleClickBackward}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAAC6CAMAAACp4U7FAAAAYFBMVEX///8AAAD09PT7+/uurq7d3d3W1ta/v79XV1fHx8fw8PDl5eVxcXEaGhqqqqqenp5GRkZRUVEgICArKyuYmJhkZGQ6Ojp7e3vQ0NAODg6IiIi3t7eRkZElJSU1NTVqamogiJ10AAAEUElEQVR4nO2cCXKjMBBFLXYQNrtZY+5/ywEy5WQCYen+sqkavQPYr1So1eqWdLloNBqNRqPRaDQazX+H9PPCK3JfvlvkYjex+OTevNfGDq/ii2v7PhO/FD/o3mVS1D9VhLi9QSRwP+YiA3X1ahMjShZNBkLztSb54zeTAeeFJk6+IjKQvMxENtm6ihCviTKGU2yJjF/MK1TcfoeJEJn6L8aNF8LJIrlakcBamzo/CRSamL+Hk0UiZSZyYxLPyQw1Jk639zP5hpJVSfbLy84GHnxgzMqjiIygV8h2XzhZBJrHGO2dbgJdlOQt3v6/Na4oE6NjjckExsTu2CJCfEBMyhSgIjy2iGl7hMC2BHcVMNs92ck+bJ6KRQ5scwpO3JUWTmTAp5sEEX8Sf4cedYMGMnW+KKlbJKfBigxziKji0HKCFR4uScTwmavOjNojfrWcnGCZkGZiWPAxCW3Sh2LfQLH+SdbRtq5Bgw0nAxEp6JsyRIvExJVwXmLjktxoi09VXLd//BB3n2QSuMCVeKImTmJoTvBJWZEmcYDNCQayklZNkNFmYeuoSUfL3ILySO1kD2lEG5MKPok9YhUBH05inzQmCnKChFZAMNxjha0dlMRwwt2dL5jQaqUyQovEDTGcwHOCNKJlJ7JEr3+ZRczsXbCI8KgmlxvYhBhO8CrXkNFmsKEpdcOqjAIjfkrMCZ7DAjO5d9xeByxhsvh9OkyNK4GcBEBkb72LaTDzTTxaOo13SUtge4On0kD7pwyRewNuP5FNHoBJjHG5tgqauCSThFbsU+ISW+dxGXYaxAxShcvwxdBqXEpchpw2BH+/DJeB3kEedeK5CBECpxTXZZhULir8InKGxMJ8OJhcKqY2Xf4BlmPm/ICDy72zhhtwTOCe5NrT2h5fAwPdqzGnOLiMW7Bs0Ht7Vm4Dr3nExD7IiAzhtaCcbmM36EK3IJbcp7E5fDxvi0fJCDj4mipjTxm0cJuQvus3fHi/NWbs/F140/WjJa+bZoVvATOmOL6XJUp6TmHn6JMlNaPGGaDXKZGGnIAD7wkXtD75NDYtvLlVMMqMPvwMQcrIKfDN0AexQXwZz5zAjybdG3owVnAWh1F3xJ9R4gQcw4KPTVKRp7hpwT8cj14ZwPf1WX0NpwefC2Xdt8SfA+kYJRyJPjPbs041g88SNwwX+Blrbt0Pec6MfecHeSaf34oyneQkdxUmHMwpEf4djgkbcRg9xbic6c7PiIzOchdqxDh00XMG6Ht5wpni8CuxRkXexKi4dW8XpN0v687P71SU62tq2qkD8rBNpvAtAiM/9uGofTAisA70yWqVd7kn9t9xV3eV+5vNvk3MA97rXuJEbyKMnOatiImtNzTQS9E6RneWt0Umm9O8uTISuMsbvPrVw/KJv3SpWNlKtIE5L/4pfspjFbv/500nNUev9ts8i38x8SofkukNsP4Mb4BpNBqNRqPRaDQazV/+AORtRUhw+HX9AAAAAElFTkSuQmCC"
              width={20}
              alt="404 Error"
            />
          </div>
        )}
        {display2 && (
          <div className="forward" onClick={handleClickForward}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAACFCAMAAACaJK1BAAAAZlBMVEX///8AAAD6+vrw8PDNzc3z8/Pk5OTp6embm5vY2Njb29u7u7tpaWltbW22tratra1TU1MsLCwnJyeFhYV7e3tHR0cXFxehoaFAQECSkpJkZGQgICCLi4tycnLFxcVbW1sODg45OTnwBALrAAACw0lEQVRoge2a7ZKiMBBFCQiCKIio6KgI7/+Sk7UsV+Wr7w3Z2h85DzCnrLl0ujvxPIfD4XA4ZmWVppFdw3KvHpx9e45MvSgDS45cvbNe2XBE6ovtYn7Jz7dEqTad2bHqOjS7fNYM3HolSl3i+TKwHHBojte5vpzrsERzmyVq4ahD85OYS+IpiVL32lQy7dAcMqOoZdOGB20e8pKh/HYp+ETvxBKlmuuSkwCOP+ypDwf5JQ/WRKLl/5MXWzjR0nR90GaghZHoqlZBkpqzgO1APv33BiiBRC/ghL1AolYfaA3SDizutAZpBxLii3lSAO1AVNKaSyUvnsH5yGqOQPEMq4LVNHt5OxBmfNSARPv1ltb8o0QfUnnUklvDak5AOxCVdNR2QDsQxLRGAYn28wutQdqBjP5w/scanfCJXsstXkTX6ANg8YLxOWaYPWLx/IqzoE1nzrQDMSjxvBSP2haW6OLZM/aP0hASPfiDUaMkaDtASvT0f5ZXNVqiP5yqtS/R7cDauiTMT7Z/SQD0TqRieUXOTEoR7QEDJ1ltMIVqYAXRkaG1K5UG6h2sCpOtC3Ce+ILFWC/yk3FJD0jiMx4O1F82QsXC/iRRM4F6/gpZB+lnLa0oZakKK35XcZUND8jZ94V0XWkwAkknrYTP7FY4MxqMpXdZZk0GbGlmxQd3h6NwI2Gw9LicZZNocKZH910lC5TBIqoQ3kkYZPYk3EUbZFZaZ1d8nRVfrlKL9AfyvfCCVcTAhpszXHK5QXdSjOIE3gwTmwZhEXwDriMb4goVVNi/00IWzB/Iy0kBrMq/kH6KyIq0i0ghPbiHkNxiG7/LmLyPZ24vO4weVshVwhgjbySkB7eAwdcewoNbRP+7lQK9ep2g5/BF6+w0nbdE5pnt4fNm9mbpLdn7+64Z/9tfPF+qNcjBzZCkteU3dw6Hw+FwmPALcTYn04+rmekAAAAASUVORK5CYII="
              width={20}
              alt="forward"
            />
          </div>
        )}
        {toggle ? (
          <div className="news-updates-fourth-page">
            <a
              className="flex-news-update-child"
              href="http://www.businessworld.in/article/Platforms-to-watch-out-for-if-you-want-to-learn-coding/06-10-2020-328480/"
            >
              <img
                src="https://files.codingninjas.in/bw-logo-5471.jpg"
                width={150}
                alt="news"
              />
              <div>Platforms To Watch Out For If You Want To Learn Coding</div>
            </a>
            <a
              className="flex-news-update-child"
              href="https://www.indiatoday.in/education-today/featurephilia/story/why-learn-programming-5-easy-ways-to-learn-coding-at-home-1730109-2020-10-09"
            >
              <img
                src="https://files.codingninjas.in/india-today-5474.jpg"
                alt="news"
                width={80}
              />
              <div>Why learn programming?</div>
            </a>
            <a
              className="flex-news-update-child"
              href="https://brandequity.economictimes.indiatimes.com/news/marketing/coding-ninjas-aims-for-coding-curiosity-among-students/78762964"
            >
              <img
                src="https://files.codingninjas.in/et-brandequity-5439.jpg"
                alt="news"
                width={150}
              />
              <div>Coding Ninjas aims for coding curiosity among students</div>
            </a>
            <a
              className="flex-news-update-child"
              href="http://bweducation.businessworld.in/article/-Coding-Ninjas-Collaborates-With-Chitkara-University-To-Offer-Programming-Courses-To-First-Year-B-Tech-Students-/24-08-2020-312294/"
            >
              <img
                src="https://files.codingninjas.in/et-logo-5689.png"
                alt="news"
                width={120}
              />
              <div>
                Coding Ninjas Collaborates With Chitkara University To Offer
                Programming Courses
              </div>
            </a>
            <a
              className="flex-news-update-child"
              href="https://inc42.com/startups/coding-ninjas-turns-past-learners-into-teachers-to-challenge-byjus-owned-whitehat-jr/?itm_source=inc42-sponsored-content&itm_medium=website&itm_campaign=sponsored-content"
            >
              <img
                src="https://files.codingninjas.in/inc-42-5477.jpg"
                alt="news"
                width={80}
              />
              <div>Coding Ninjas Turns Past Learners Into Teachers</div>
            </a>
            <a
              className="flex-news-update-child"
              href="https://yourstory.com/2020/09/startup-edtech-code-reskilling-upskilling-college-students"
            >
              <img
                src="https://files.codingninjas.in/0000000000004338.png"
                width={90}
                alt="news"
              />
              <div>
                Coding Ninjas aims to crack the edtech code by reskilling and
                upskilling college students
              </div>
            </a>
            <a
              className="flex-news-update-child"
              href="https://www.thehindu.com/education/coding-programming-coding-language-coding-is-key-coding-enabled-world-and-workforce-ankush-singla/article32659831.ece"
            >
              <img
                src="https://files.codingninjas.in/the-hindu-5475.webp"
                width={150}
                alt="news"
              />
              <div>Coding-enabled world and workforce</div>
            </a>
            <a
              className="flex-news-update-child"
              href="https://www.thehindu.com/education/coding-programming-coding-language-coding-is-key-coding-enabled-world-and-workforce-ankush-singla/article32659831.ece"
            >
              <img
                src="https://files.codingninjas.in/bllogo-5440.jpg"
                width={150}
                alt="news"
              />
              <div>
                Ed-tech start-up Coding Ninjas to offer coding, programming
                courses for students
              </div>
            </a>
          </div>
        ) : (
          <div className="news-updates-fourth-page">
            <a
              className="flex-news-update-child"
              href="https://digitalterminal.in/news/coding-ninjas-launches-ninjas-junior-program-to-offer-coding-courses/19646.html"
            >
              <img
                src="https://files.codingninjas.in/digital-terminal-5383.png"
                width={50}
                alt="news"
                className="media-img-reduce4"
              />
              <div>Coding Ninjas Launches Ninjas Junior Program</div>
            </a>
            <a
              className="flex-news-update-child"
              href="https://www.educationtimes.com/article/editors-pick/77001034/Coding-Bootcamps-Silver-lining-and-beyond#gsc.tab=0"
            >
              <img
                src="https://files.codingninjas.in/education-times-5347.jpg"
                width={150}
                alt="news"
                className="media-img-reduce3"
              />
              <div>Coding Bootcamps: Silver lining and beyond</div>
            </a>
            <a
              className="flex-news-update-child"
              href="https://www.edexlive.com/news/2020/aug/02/full-speed-ahead-how-the-pandemic-proved-to-be-rocket-fuel-for-indias-edtech-platforms-13628.html"
            >
              <img
                src="https://files.codingninjas.in/edex-live-logo-5377.jpg"
                width={150}
                alt="news"
                className="media-img-reduce3"
              />
              <div>
                How the pandemic proved to be rocket fuel for India's EdTech
                platforms
              </div>
            </a>
            <a
              className="flex-news-update-child"
              href="https://analyticsindiamag.com/how-will-the-new-education-policy-make-india-ai-ready/"
            >
              <img
                src="https://files.codingninjas.in/analytics-india-magazine-5348.jpg"
                width={50}
                alt="news"
                className="media-img-reduce4"
              />
              <div>How Will The New Education Policy Make India AI-Ready</div>
            </a>
            <a
              className="flex-news-update-child"
              href="https://www.outlookindia.com/newsscroll/coding-ninjas-partners-with-recruitment-platform-hiristcom-to-offer-techrelated-jobs/1909539"
            >
              <img
                src="https://files.codingninjas.in/outlook-india-5479.png"
                width={150}
                alt="news"
                className="media-img-reduce3"
              />
              <div>
                Coding Ninjas partners with recruitment platform Hirist.com to
                offer tech-related jobs
              </div>
            </a>
            <a
              className="flex-news-update-child"
              href="https://www.indiatoday.in/information/story/here-are-5-platforms-placing-and-up-skilling-graduates-remotely-1712052-2020-08-17"
            >
              <img
                src="https://files.codingninjas.in/india-today-5474.jpg"
                width={100}
                alt="news"
                className="media-img-reduce2"
              />
              <div>5 platforms placing and up skilling graduates remotely</div>
            </a>
            <a
              className="flex-news-update-child"
              href="http://bweducation.businessworld.in/article/-Coding-Ninjas-Collaborates-With-Chitkara-University-To-Offer-Programming-Courses-To-First-Year-B-Tech-Students-/24-08-2020-312294/"
            >
              <img
                src="https://files.codingninjas.in/business_world_small-5671.png"
                width={60}
                alt="news"
                className="media-img-reduce1"
              />
              <div>Coding Ninjas Collaborates With Chitkara University</div>
            </a>
            <a
              className="flex-news-update-child"
              href="https://www.entrepreneurindia.com/virtual-awards/awards_winner.php"
            >
              <img
                src="https://files.codingninjas.in/entrepreneur-india-logo-5481.png"
                width={60}
                alt="news"
                className="media-img-reduce1"
              />
              <div>
                Coding Ninjas bags the Best Education Startup Of The Year Award
                2020
              </div>
            </a>
          </div>
        )}

        <div className="video-page-container">
          <iframe
            className="video-container-media"
            src="https://www.youtube.com/embed/vEnefxh8o_k"
            title="India Inc on Reviving Our Economy   NewsX &amp; BW Special   NewsX"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // allowfullscreen
          ></iframe>
          <div className="in-video-padding">
            <img
              src="https://files.codingninjas.in/newsx_small-5673.png"
              alt="404 Error"
            />
            <div className="first-one">
              India Inc on Reviving Our Economy NewsX & BW Special
            </div>
            <div className="new-one-next">
              Ankush Singla, Co-Founder, Coding Ninjas joins a panel discussion
              with other industry stalwarts to talk about the economy in the
              times of COVID-19.
            </div>
          </div>
        </div>

        <FifthPage />
      </div>
    </div>
  );
};
export default FourthPage;
