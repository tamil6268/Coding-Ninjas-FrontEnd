import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [logged, setLogged] = useState(true);
  const [logOut, setLogOut] = useState(true);
  const [extra, setExtra] = useState(false);
  const [name, setName] = useState("");
  const [dummy, setDummy] = useState(2);
  const [menu, setMenu] = useState(false);
  const [toolTip, setTooltip] = useState({});
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  console.log("tool", toolTip);
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
  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token) {
      setExtra(true);
      setLogOut(false);
      fetch("https://heisen-tamil-codingninjas.onrender.com/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          JWTToken: token
        }
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.message == "Token Verified") {
            setName(res.user.Name);
            console.log(res.user);
            setTooltip({ Name: res.user.Name, Email: res.user.Email });
          }
        });
    }
  }, [dummy, logOut, logged]);
  const handleLog = () => {
    setToggle(true);
    setDummy(4);
  };
  const [userData, setUserData] = useState({
    Name: "",
    Email: "",
    Password: "",
    Contact: ""
  });
  const [error, setError] = useState({});

  const handleClick = () => {
    window.scrollTo({ top: 3500 });
  };
  // console.log(userData)

  //Validation Part:
  const validate = {
    Name: /^[a-zA-Z]{5,12}$/i,
    Email: /^[a-zA-Z0-9]+@+gmail+.com/,
    Password: /^[A-Za-z0-9]{5,12}$/i,
    Contact: /^[1-9]{10}$/
  };

  const handleChangeReg = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });

    let errorMessage = {};
    let count = 0;
    if (!validate.Name.test(userData.Name)) {
      errorMessage.Name = "Should be contain(5-12) letters";
    } else {
      count += 1;
      errorMessage.Name = "";
    }

    if (!validate.Email.test(userData.Email)) {
      errorMessage.Email = "should be valid Email(eg: abc@gmail.com)";
    } else {
      count += 1;
      errorMessage.Email = "";
    }

    if (!validate.Password.test(userData.Password)) {
      errorMessage.Password = "password lenght(6-12)";
    } else {
      count += 1;
      errorMessage.Password = "";
    }
    if (!validate.Contact.test(userData.Contact)) {
      errorMessage.Contact = "should be 10 digit number";
    } else {
      count += 1;
      errorMessage.Contact = "";
    }

    if (Object.keys(errorMessage).length > 0) {
      setError(errorMessage);
      return;
    }
    if (count == 4) {
      axios
        .post(
          "https://heisen-tamil-codingninjas.onrender.com/register",
          userData
        )
        .then((res) => {
          alert(res.data.message);
          console.log(res);
          setToggle(false);
          // setTimeout(()=>{
          //   setToggle(true)
          //   setLogged(true)
          // },2000)
          setDummy(5);
        });
    }
    if (count == 2) {
      axios
        .post("https://heisen-tamil-codingninjas.onrender.com/login", userData)
        .then((res) => {
          alert(res.data.message);
          console.log(res);
          setToggle(false);
          setLogOut(false);
          setDummy(6);
          // setTimeout(()=>{
          //   setToggle(true)
          //   setLogged(true)
          // },2000)
        });
    }
  };
  const handleSubmitRegister = (e) => {
    e.preventDefault();
    let errorMessage = {};
    let count = 0;
    if (!validate.Name.test(userData.Name)) {
      errorMessage.Name = "Should be contain(5-12) letters";
    } else {
      count += 1;
      errorMessage.Name = "";
    }

    if (!validate.Email.test(userData.Email)) {
      errorMessage.Email = "should be valid Email(eg: abc@gmail.com)";
    } else {
      count += 1;
      errorMessage.Email = "";
    }

    if (!validate.Password.test(userData.Password)) {
      errorMessage.Password = "should be above 3 letters with (A-Z,a-z,0-9)";
    } else {
      count += 1;
      errorMessage.Password = "";
    }
    if (!validate.Contact.test(userData.Contact)) {
      errorMessage.Contact = "should be 10 digit number";
    } else {
      count += 1;
      errorMessage.Contact = "";
    }

    if (count == 4) {
      axios
        .post(
          "https://heisen-tamil-codingninjas.onrender.com/register",
          userData
        )
        .then((res) => {
          alert(res.data.message);
          console.log(res);
          setToggle(false);
          setDummy(7);
          // setTimeout(()=>{
          //   setToggle(true)
          //   setLogged(true)
          // },2000)
        });
    }
    if (count == 2) {
      axios
        .post("https://heisen-tamil-codingninjas.onrender.com/login", userData)
        .then((res) => {
          alert(res.data.message);
          console.log(res);
          setToggle(false);
          setLogOut(false);
          setDummy(8);
          setName(res.data.userName);
          setExtra(true);
          localStorage.setItem("Token", res.data.Token);
        });
    }
    if (Object.keys(errorMessage).length > 0) {
      setError(errorMessage);
      return;
    }
  };

  // const AuthToken=()=>{
  //   let token = localStorage.getItem("Token");
  //   fetch("http://localhost:8080/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       JWTToken: token
  //     }
  //   })
  //     .then((data) => data.json())
  //     .then((res) => setName(res));
  // }
  const handleClickMenu = () => {
    setMenu(true);
    setTimeout(() => {
      setMenu(false);
    }, 2000);
  };

  const handleLogout = () => {
    localStorage.removeItem("Token");
    alert("Logout Succeafully");
    setLogOut(true);
    setDummy(3);
    setExtra(false);
  };
  return (
    <div style={{ width: "98.7vw" }}>
      <div id="parent-Nav">
        <div className="hover-effect-child one" onClick={handleClickMenu}>
          <i class="fa-sharp fa-solid fa-bars"></i>
        </div>

        {/* extra menu while click */}
        {menu && (
          <div className="onClick-menu">
            <div className="flex-nav-menu">
              <div
                className="hover-effect-child one"
                onClick={() => setMenu(false)}
              >
                <i
                  className="fa-regular fa-xmark"
                  style={{ color: "#eb0505" }}
                ></i>
              </div>
              <div className="hover-effect-child">
                <img
                  src="https://files.codingninjas.in/logo_variants-white-25005.png"
                  width={80}
                  alt="404 Error"
                />
              </div>
              <div>.</div>
            </div>

            <div
              className="hover-effect-child"
              onClick={() => window.scrollTo({ top: 4750 })}
            >
              Course <i className="fas fa-caret-right"></i>
            </div>
            <div
              className="hover-effect-child"
              href="https://www.codingninjas.com/landing/scholarship-test"
            >
              Scholership
              <button className="btn-scholership" disabled>
                UPTO 100% OFF
              </button>
              <i className="fas fa-caret-right"></i>
            </div>
            <div className="hover-effect-child">
              Community <i className="fas fa-caret-right"></i>
            </div>

            <div className="hover-effect-child">
              practice <i className="fas fa-caret-right"></i>
            </div>
            <div
              className="hover-effect-child"
              onClick={() => navigate("/User")}
            >
              My Classroom
              <i className="fas fa-caret-right"></i>
            </div>
          </div>
        )}

        <div className="hover-effect-child" onClick={() => navigate("/")}>
          <img
            src="https://files.codingninjas.in/logo_variants-white-25005.png"
            width={80}
            alt="404 Error"
          />
        </div>

        <li className="hide">
          <div className="hover-effect-child">
            Course <i className="fas fa-caret-down"></i>
          </div>
          <ul className="dropdown">
            <div>
              <div className="drop-down-container-in">
                <div className="Question-hover">
                  What is your work experience?
                </div>
                <div className="Answer-hover">
                  This will help us recommend the best programs for you.
                </div>
              </div>
              <div className="drop-down-box">
                {dataHover.map((item, index) => {
                  return (
                    <div key={index} onClick={handleClick}>
                      <button className="drop-down-one">
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
                    </div>
                  );
                })}
              </div>
            </div>
          </ul>
        </li>

        <div className="hover-effect-child hide">
          <a
            style={{ color: "white" }}
            href="https://www.codingninjas.com/landing/scholarship-test"
          >
            Scholership
            <button className="btn-scholership" disabled>
              UPTO 100% OFF
            </button>
          </a>
        </div>

        <li className="hide">
          <div className="hover-effect-child hide">
            Community <i className="fas fa-caret-down"></i>
          </div>
          <ul>
            <div className="community-box-nav color-hover">
              <div
                className="community-box-nav-hover"
                onClick={() => window.scrollTo({ top: 5600 })}
              >
                <a>Events</a>
              </div>
              <div className="community-box-nav-hover">
                <a href="https://www.codingninjas.com/collaborations">
                  Sponsorship & Collaborations
                </a>
              </div>
              <div className="community-box-nav-hover">
                <a href="https://campus.codingninjas.com/?utm_medium=website-nav-bar">
                  Campus Ambassador Program
                </a>
              </div>
            </div>
          </ul>
        </li>
        <li className="hide">
          <div className="hover-effect-child hide">
            practice <i className="fas fa-caret-down"></i>
          </div>
          <ul>
            <div className="community-box-nav color-hover">
              <div className="community-box-nav-hover king">
                Coding Ninja Studio
              </div>
              <div className="community-box-nav-hover">
                <a href="https://www.codingninjas.com/codestudio/contests">
                  Contests
                </a>
              </div>
              <div className="community-box-nav-hover">
                <a href="https://www.codingninjas.com/codestudio/guided-paths">
                  Guided Paths
                </a>
              </div>
              <div className="community-box-nav-hover">
                <a href="https://www.codingninjas.com/codestudio/problems">
                  Code Problems
                </a>
              </div>
              <div className="community-box-nav-hover">
                <a href="https://www.codingninjas.com/codestudio/interview-experiences">
                  Interview Experience
                </a>
              </div>
              <div className="community-box-nav-hover">
                <a href="https://www.codingninjas.com/codestudio/test-series">
                  Mock Tests
                </a>
              </div>
            </div>
          </ul>
        </li>

        <div className="hover-effect-child hide">
          <a href="https://www.codingninjas.com/careercamp/professionals/?utm_campaign=cc_navbar">
            <img
              src="https://files.codingninjas.in/careercamp-12614.svg"
              alt="404 Error"
            />
          </a>
          <span className="New">New</span>
        </div>
        {extra && (
          <div className="hover-effect-child" onClick={() => navigate("/User")}>
            My Classroom
          </div>
        )}
        {extra && (
          <>
            <div className="userId-Box" id="userId-Box" title={toolTip.Name}>
              {name.slice(0, 1)}
            </div>
            <div className="hover-user-details">
              <div className="hover-user-details-Name">TAMILARASAN</div>
              <div className="hover-user-details-Time">
                Using Timezone: Asia - Calcutta
              </div>
              <button className="btn-Nav-LogIn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </>
        )}

        {logOut && (
          <div>
            <button className="btn-Nav-LogIn" onClick={handleLog} id="Login">
              Login
            </button>
          </div>
        )}
        <button className="btn-Nav-entroll hide" onClick={handleClick}>
          Entroll Now
        </button>
      </div>

      {/* Login-Page */}
      {toggle && (
        <div className="login-top-head">
          <div id="popup-box-login-signup">
            <div className="head-login-signup">
              <h2>Login/Sign Up</h2>
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/251/251319.png"
                  width={18}
                  alt="404 Error"
                  onClick={() => setToggle(false)}
                />
              </div>
            </div>
            {/* <div className="btn-head-flex-container">
            <a href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?access_type=offline&client_id=974791617509-tbrgtb2s7r15h1pqe6qb9rhvvk3mh161.apps.googleusercontent.com&prompt=select_account&redirect_uri=https%3A%2F%2Fadmin.codingninjas.com%2Fusers%2Fauth%2Fgoogle_oauth2%2Fcallback&response_type=code&scope=email%20profile&state=d12435500a356e481d1c452423ab4af1d0e54f4a79dc5884&service=lso&o2v=1&flowName=GeneralOAuthFlow">
            <button className="btn-head-one">
                <img src="https://files.codingninjas.in/icon-google-24742.png" width={30}alt="google_link"/>
                <div>Login With Google</div>
            </button>
            </a>
            <button className="btn-head-one">
                <img src="https://files.codingninjas.in/icon-fb-24743.png" width={30}alt="google_link"/>
                <div>Login With Facebook</div>
            </button>
            <button className="btn-head-one">
                <img src="https://files.codingninjas.in/naukri-21404.svg" width={30}alt="google_link"/>
                <div>Login With Naukri</div>
            </button>
          </div> */}
            {/* <div className="btn-head-one-next-box">
            <div className="hypen-form"></div>
            <div className="hypen-form-text">OK</div>
            <div className="hypen-form"></div>
          </div> */}

            {logged ? (
              <div className="email-popup">
                <form
                  className="form-box-fourth-page-continue"
                  onSubmit={handleSubmitRegister}
                >
                  <input
                    className="input-box"
                    type="text"
                    placeholder="Enter Name*"
                    name="Name"
                    onChange={handleChangeReg}
                  />
                  {
                    <span className="error" style={{ color: "red" }}>
                      {" "}
                      {error.Name}
                    </span>
                  }
                  <input
                    className="input-box"
                    type="password"
                    placeholder="Password*"
                    name="Password"
                    onChange={handleChangeReg}
                  />
                  {
                    <span className="error" style={{ color: "red" }}>
                      {" "}
                      {error.Password}
                    </span>
                  }
                  <button className="firstPage-btn-Explore">Login</button>
                  <div
                    className="a-tag-degisn"
                    onClick={() => setLogged(false)}
                  >
                    New User Register
                  </div>
                </form>
              </div>
            ) : (
              <div className="email-popup">
                <form
                  className="form-box-fourth-page-continue"
                  onSubmit={handleSubmitRegister}
                >
                  <input
                    className="input-box"
                    type="text"
                    placeholder="First Name*"
                    name="Name"
                    onChange={handleChangeReg}
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
                    onChange={handleChangeReg}
                  />
                  {
                    <span className="error" style={{ color: "red" }}>
                      {" "}
                      {error.Email}
                    </span>
                  }

                  <input
                    className="input-box"
                    type="password"
                    placeholder="Enter Password*"
                    name="Password"
                    onChange={handleChangeReg}
                  />
                  {
                    <span className="error" style={{ color: "red" }}>
                      {" "}
                      {error.Password}
                    </span>
                  }

                  <input
                    className="input-box"
                    type="number"
                    placeholder="Contact Number*"
                    name="Contact"
                    onChange={handleChangeReg}
                  />
                  {
                    <span className="error" style={{ color: "red" }}>
                      {" "}
                      {error.Contact}
                    </span>
                  }

                  <button className="firstPage-btn-Explore">SignUp</button>
                  <div className="a-tag-degisn" onClick={() => setLogged(true)}>
                    If Already Registerd?Login Here
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Extra Nav Work */}

      <div className="Course-Container"></div>
    </div>
  );
};
export default NavBar;
