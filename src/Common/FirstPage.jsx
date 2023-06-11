import NavBar from "../Components/NavBar.jsx";
import Typewriter from "typewriter-effect";
const FirstPage = () => {
  const handleClick=()=>{
    window.scrollTo({top:3500})
  }
  return (
    <div id="hex-home-bg-color-cut">
      <NavBar />
      <div className="parent-Body">
        <div id="gap-flex-headContent">
          <div className="firstPage-title1">
            <Typewriter
              options={{
                strings: [
                  "Chasing Jobs? Let the jobs chase you.",
                  "World has enough coders",
                  "Be more than a coder"
                ],
                autoStart: true,
                loop: true,
                typeSpeed: 150,
                backSpeed: 100
              }}
            />
          </div>
          <div className="firstPage-title2">Be A Coding Ninja</div>
          <div className="firstPage-title3">
            50,000 Students from 300 colleges have trusted us
          </div>
          <button className="firstPage-btn-Explore" onClick={handleClick}>
            Explore Our Programs
          </button>
        </div>
        <div >
          <img
            id="animation-intro"
            src="https://files.codingninjas.in/438375-17407.webp"
            alt="Welcome Image..."
          />
        </div>
      </div>
      {/* Content Box */}
      <div id="box-model-content-parent">
        <div id="ContentBox-firstPage">
          <div className="content-head-one">
            If you have the courage and the commitment to learn coding, then
            Coding Ninjas will empower you.
          </div>
          <div className="content-head-two">NO MATTER WHAT IT TAKES!</div>
          <div className="Content-flex-parent">
            <div className="Content-flex">
              <div>
                <img
                  src="https://files.codingninjas.in/boxicon1-9659.svg"
                  alt="404 Error"
                />
              </div>
              <div>Content designed by IIT & Stanford alumni</div>
            </div>
            <div className="Content-flex">
              <div>
                <img
                  src="https://files.codingninjas.in/boxicon2-9658.svg"
                  alt="404 Error"
                />
              </div>
              <div>Instant 1:1 doubt resolution</div>
            </div>
            <div className="Content-flex">
              <div>
                <img
                  src="https://files.codingninjas.in/boxicon3-9657.svg"
                  alt="404 Error"
                />
              </div>
              <div>
                Practical learning with 100+ problems & 10+ projects in each
                course
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="message-user-home-page">
        <img src="https://files.codingninjas.in/article_images/favicon-and-cherrypy-1-1660924366.webp" className="circle"alt="message"/>
      </div>
    </div>
  );
};
export default FirstPage;
