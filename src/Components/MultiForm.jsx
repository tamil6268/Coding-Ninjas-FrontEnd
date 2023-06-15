import './MultiForm.css';
import Form1 from '../FormEntroll/Form1.jsx';
const MultiForm=()=>{
    return (
    <div className="multi-form-container">
        <div className="multi-parent-flex">

            <div className="multi-one">
                <form>
                    <Form1/>
                </form>
            </div>
            <div className="multi-two">
                <button>Back</button>
                <button>Next</button>
            </div>
        </div>
    </div>
    )
}
export default MultiForm;