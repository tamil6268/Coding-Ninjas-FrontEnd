import {Link} from 'react-router-dom';
const End=()=>{
    return(
        <div>
            <div style={{height:"100vh",backgroundColor:"black",display:"flex",flexDirection:"column",rowGap:"20px",alignItems:"center",zIndex:"+22"}}>
             <img src="https://files.codingninjas.in/course-pause-new-13988.png"width={1340} height={550}alt="404 Error"/>
            <button style={{backgroundColor:"orangered",color:"white"}}><Link to="/" style={{color:"white"}}>Proceed</Link></button>
            </div>
        </div>
    )
}
export default End;