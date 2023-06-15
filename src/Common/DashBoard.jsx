import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DashBoard = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Start-Learning");
  };
  useEffect(() => {
    axios
      .get("https://heisen-tamil-codingninjas.onrender.com/User/Course")
      .then((res) => setData(new Set(res.data.State)))
      .catch((error) => console.log(error));
  }, []);

  // console.log("Data",data[data.length-1])
  return (
    <div>
      <div className="course-container">
        <div className="innerBox-user">
          <div className="innerBox-user">
            <img
              style={{ borderRadius: "50%" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzbl-DPMq6ZqVMR1bEQNjDNW6Rh_5E6WddZg&usqp=CAU"
              alt="404 Error"
              width={30}
            />
            <div className="title-user">My ClassRoom</div>
          </div>
          <button onClick={() => navigate(-1)}>Home</button>
        </div>
        <hr />
        {data.length > 0 ? (
          <div className="course-container-in">
                <div className="course-container-individual">
                  <div className="course-container-in">
                    <div className="course-container-in-one">{data[data.length-1].course}</div>
                    <div>{data[data.length-1].detailcontent}</div>
                    <div className="course-container-in-two">
                      {data[data.length-1].detailhead}
                    </div>
                  </div>
                  <div className="course-container-in">
                    <img src={data[data.length-1].url} alt={data[data.length-1].h1} width={90} />
                    <button style={{ cursor: "not-allowed" }} disabled>
                      Entolled
                    </button>
                  </div>
                </div>
            <button
              style={{ cursor: "pointer", backgroundColor: "tomato" }}
              onClick={handleClick}
            >
              Explore Our Programs
            </button>
          </div>
        ) : (
          <div className="display-course-not-entrolled">
            <img
              src="https://files.codingninjas.in/explore-our-courses-illustration-27791.svg"
              alt="Error Page"
            />
            <h2>Boost Your Carrer with in-demand coding Skills.</h2>
            <h2>Explore Our Coding Skills.</h2>
            <button
              style={{ cursor: "pointer", backgroundColor: "tomato" }}
              onClick={handleClick}
            >
              Explore Our Programs
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default DashBoard;
