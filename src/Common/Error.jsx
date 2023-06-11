import './Error.css';
import {useNavigate} from 'react-router-dom';
const Error=()=>{
    const navigate=useNavigate()
    return(
        <div style={{color:"white",backgroundColor:"black"}} >
            <div className="Error-home">
            <h1 className="Error-home-head">Authorized persons only Access this Page</h1>
            <code className="Error-home-sub" onClick={()=>navigate('/')}>Please try to login</code>
            </div>
        </div>
    )
}
export default Error;