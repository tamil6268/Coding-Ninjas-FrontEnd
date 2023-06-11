import {useState} from 'react';
import FirstSlide from "../Components/FirstSlide.jsx";
function SlideContentMedia(){
  const [slide, setSlide] = useState("First");
    const obj = {
        one: ["100+", "average hours of learning per course"],
        two: ["50+", "practice problems in each course"],
        three: ["10+", "projects per course"]
      };
      const obj1 = {
        one: ["20 min", "avg. doubt resolution time"],
        two: ["100+", "doubts resolved per hour"],
        three: ""
      };
      const obj2 = {
        one: ["500+", "Interview problems with solutions"],
        two: ["250+", "Interview experiences"],
        three: ""
      };
      const obj3 = {
        one: ["10", "Mock Interviews (with selected course plans)"],
        two: ["500+", "Industry mentors"],
        three: ""
      };
      const obj4 = {
        one: ["7.6 LPA", "Average CTC"],
        two: ["300+", "Hiring partners"],
        three: ""
      };
      const obj5 = {
        one: ["15+", "events conducted every month"],
        two: ["13+", "articles published every month"],
        three: ""
      };
    return(
        <div>
              <div id="sub-nav-fourth-Page">
          <button
            className="hover-effect-child1"
            onClick={() => setSlide("First")}
          >
            GUIDED PROGRAM
          </button>
          {slide === "First" && (
          <FirstSlide
            title="Well Guided Program"
            subTitle="We have invented and perfected the best system to learn coding"
            para="Your Journey will follow a tried & Tested method that delivers the
            best results. Each concept that you learn will follow the following
            structure."
            para1=""
            list="yes"
            review={obj}
            url="https://files.codingninjas.in/pl1-9663.png"
          />
        )}
          <button
            className="hover-effect-child1"
            onClick={() => setSlide("Second")}
          >
            DOUBT RESOLUTION
          </button>
          {slide === "Second" && (
          <FirstSlide
            title="Doubt Resolution"
            subTitle="Get your doubts resolved instantly with live 1:1 mentor support."
            para="In case you have any doubt at any time while you are watching a video, with an MCQ, a coding assignment or a test - We have you covered!"
            para1="
We have a network of dedicated teaching assistants to make sure your doubts get resolved quickly and you dont miss on deadlines."
            list="no"
            review={obj1}
            url="https://files.codingninjas.in/group-4774-9668.png"
          />
        )}
          <button
            className="hover-effect-child1"
            onClick={() => setSlide("Third")}
          >
            CODING NIJAS STUDIO
          </button>
          {slide === "Third" && (
          <FirstSlide
            title="Coding Ninjas Studio"
            subTitle="A platform to help you practice, compete & get ready for interviews."
            para="A place for aspiring and experienced programmers to prepare for tech interviews, practice problems, compete in challenges, discuss and stay up to date with the latest developments in the tech world."
            para1="Our expert designed curated guided paths will help you save time and energy to figure out which coding questions to be solved and give you a perfect sequence to maximise your learning experience."
            list="no"
            review={obj2}
            url="https://files.codingninjas.in/mask-group-9667.png"
          />
        )}
          <button
            className="hover-effect-child1"
            onClick={() => setSlide("Fourth")}
          >
            MOCK INTERVIEW
          </button>
          {slide === "Fourth" && (
          <FirstSlide
            title="Mock Interviews"
            subTitle="Mock Interviews to help you get prepared for your real interview"
            para="Industry experts from top product companies like Amazon, Facebook, Google and working in the US will take your mock interviews."
            para1="The focus will be on both technical and interpersonal skills. Get instant feedback at the end of the interview."
            list="no"
            btn="yes"
            review={obj3}
            url="https://files.codingninjas.in/mock-interview-9666.png"
          />
        )}
          <button
            className="hover-effect-child1"
            onClick={() => setSlide("Five")}
          >
            PLACEMENT CELL
          </button>
          {slide === "Five" && (
          <FirstSlide
            title="Placement cell"
            subTitle="Placement Cell - A dedicated team to help you land the best opportunities"
            para="Curated openings and industry referrals to ensure you have access to the best opportunities out there."
            para1="Our placement cell works closely with you to help you reach closer to your professional goals."
            list="no"
            btn="no"
            review={obj4}
            url="https://files.codingninjas.in/placement-9665.png"
          />
        )}
          <button
            className="hover-effect-child1"
            onClick={() => setSlide("Six")}
          >
            FREE RESOURCES
          </button>
          {slide === "Six" && (
          <FirstSlide
            title="Free Resources"
            subTitle="Tons of resources to enable you to learn for free & stay up to date"
            para="We regularly conduct webinars & coding events on various topics to answer your burning questions & to keep you up to date with the latest happenings in the tech world."
            para1="A blog with the latest articles to ensure you are reading & constantly in touch with your interest areas."
            list="no"
            btn="no"
            review={obj5}
            url="https://files.codingninjas.in/pl2-9664.png"
          />
        )}
        </div>
        </div>
    )
}
export default SlideContentMedia;