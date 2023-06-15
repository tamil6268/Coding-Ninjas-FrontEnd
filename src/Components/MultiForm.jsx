import './MultiForm.css';
const MultiForm=()=>{
    return (
    <div className="multi-form-container">
        <div className="multi-parent-flex">

            <div className="multi-one">
                <form>
                    <label>Name :</label>
                    <input type="text" placeholder='Enter Name'/>
                    <label>Name :</label>
                    <input type="text" placeholder='Enter Name'/>
                    <label>Name :</label>
                    <input type="text" placeholder='Enter Name'/>
                    <label>Name :</label>
                    <input type="text" placeholder='Enter Name'/>
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