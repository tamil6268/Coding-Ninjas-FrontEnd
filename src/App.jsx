import './App.css'
import Home from './Components/Home.jsx';
import {useState,useEffect} from 'react';
import {Routes,Route } from 'react-router-dom';
import Course from './Common/Course.jsx';
import Error from './Common/Error.jsx';
import DashBoard from './Common/DashBoard.jsx';
import StartLearning from './FormEntroll/StartLearning.jsx';
import MultiForm from './Components/MultiForm';
// import CourseMap from './Common/CourseMap.jsx';

function App() {
  const [loading,setLoading]=useState(true)
  const [logged,setLogged]=useState(false)

  useEffect(()=>{
    setTimeout(()=>{
        setLoading(false)
    },2000)
    if(localStorage.getItem("Token")){
      setLogged(true)
    }else{
      setLogged(false)
    }
  },[logged])
  return (
      <div id="body">
    <Routes>
      <Route path="/" element={loading ?<div className="animation-loading"><img className="animation-loading-img" src="https://successinsightsindia.com/wp-content/uploads/2022/02/Coding-Ninjas-Logo.jpg" width={500}alt=""/></div>:<Home/>}/>
      {/* <Route path="/" element={<Home/>}/> */}
      {logged ?<Route path="/User/Course/:course" element={<Course/>}/>:<Route path="/User/Course/:course" element={<Error/>}/>}
      <Route path="*" element={<Error/>}/>
      <Route path="/User" element={<DashBoard/>}/>
      {/* <Route path="/Start-Learning" element={<StartLearning/>}/> */}
      <Route path="/Start-Learning" element={loading ?<div className="animation-loading"><img className="animation-loading-img" src="https://successinsightsindia.com/wp-content/uploads/2022/02/Coding-Ninjas-Logo.jpg" width={500}alt=""/></div>:<StartLearning/>}/>
      {/* <Route path="/app/onboarding" element={<MultiForm/>}/> */}
      <Route path="/app/onboarding" element={loading ?<div className="animation-loading"><img className="animation-loading-img" src="https://successinsightsindia.com/wp-content/uploads/2022/02/Coding-Ninjas-Logo.jpg" width={500}alt=""/></div>:<MultiForm/>}/>
    </Routes>
      </div>
  )
}

export default App
