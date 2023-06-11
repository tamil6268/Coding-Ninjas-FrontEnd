import { useNavigate } from "react-router-dom";
const BoxCourse = ({data}) => {
  const navigate=useNavigate();
  const handleFunc=(data)=>{
    navigate(`https://heisen-tamil-codingninjas.onrender.com/User/Course/${data.course}`, { state: { data } });
  }
  return (
    <div className="BoxCourse-fourth-Page" onClick={()=>handleFunc(data)}>
      <div className="BoxCourse-inner-Box-top">
        <div className="inner-box">
          <div className="inner-box-first-text">{data.h1}</div>
          <div className="inner-box-Second-text">{data.h2}</div>
        </div>
        <img src={data.url} alt="Mern-Stack-Course"/>
      </div>
      <div className="BoxCourse-inner-Box-bottom">
        <div className="inner-Box-bottom">
            <div className="inner-Box-bottom-row">
                <img src="https://files.codingninjas.in/vector-1-19336.svg" alt="pic_Error"/>
                140+ Hours 
                <img src="https://files.codingninjas.in/mdi_palette-swatch-19337.svg" alt="pic_Error"/>
                6+ Projects 
            </div>
            <div className="inner-Box-bottom-row">4.8<img src="https://files.codingninjas.in/4-8-stars-5588.png"width={80} alt="404_Error"/>(2K+ Students)</div>
        </div>
      </div>
    </div>
  );
};
export default BoxCourse;












// const handleFunc=(data)=>{
    
//   const storage=localStorage.getItem("Token");
//   fetch("http://localhost:8080/user", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       JWTToken: storage
//     }
//   })
//     .then((res) => res.json())
//     .then((res) => {
//       if(res.message=="Token Verified"){
//         func(data)
//       }else{
//         alert("User Not Found")
//         window.scrollY({top:0});
//       }
//     }) 
//     .catch((error)=>console.log(error)) 
// }
