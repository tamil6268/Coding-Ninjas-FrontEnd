import './Course.css';
import $ from "jquery";
import axios from 'axios';
const CourseMap=({data})=>{

        const handleBuy=(data)=>{
           localStorage.setItem("Entrolled-Courses",data.detailhead)
           console.log(data)
           const userDetails=localStorage.getItem("Token")
           axios.post("https://heisen-tamil-codingninjas.onrender.com/User/Course",{state:data,token:userDetails})
           .then((res) => {
            console.log(res)
                   //Paymanet Process//
           axios.post("http://localhost:8080/User/Course",{state:data,token:userDetails})
           .then((res) => {
            console.log(res)
            //Paymanet Process//

        var orderId;
        $(document).ready(function () {
          // var settings = {
          //     "url": "/create/orderId",
          //     "method": "POST",
          //     "timeout": 0,
          //     "headers": {
          //         "Content-Type": "application/json"
          //     },
          //     "data": JSON.stringify({
          //         "amount": `${Number(cart.cartTotalAmount)}`
          //     }),
          // };
    
          document.getElementById("rzp-button1").onclick = function (e) {
            var options = {
              key: "rzp_test_10o2MtARWZ4VG1", // Enter the Key ID generated from the Dashboard
              amount: `${data.price}`, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
              currency: "INR",
              name: `${data.h2}`,
              description: "Learning Programs",
              image: `${data.url}`,
              order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
              handler: function (response) {
                alert(response.razorpay_payment_id);
                var settings = {
                  url: "/api/payment/verify",
                  method: "POST",
                  timeout: 0,
                  headers: {
                    "Content-Type": "application/json"
                  },
                  data: JSON.stringify({ response })
                };
    
                //creates new orderId everytime
                $.ajax(settings).done(function (response) {
                  alert(JSON.stringify(response));
                  localStorage.setItem("Course",data.course)
                });
              }
            };
            var rzp1 = new window.Razorpay(options);
            rzp1.on("payment.failed", function (response) {
              alert(response.error.code);
              alert(response.error.description);
              alert(response.error.source);
              alert(response.error.step);
              alert(response.error.reason);
              alert(response.error.metadata.order_id);
              alert(response.error.metadata.payment_id);
            });
            rzp1.open();
            e.preventDefault();
          };
        });
           })
        })}
    return(
        <div className="parent-box-course">
        <div className="child-box-course">
          <div className="head-title-child-course">{data.detailhead}</div>
          <div className="sub-head-title-child-course">for Beginners and Experienced Learners</div>
          <div>{data.detailcontent}</div>
          <div className="inner-box-course-rating">
            <div className="strong-text-rate">4.8</div>
            <img
              src="https://files.codingninjas.in/4-8-stars-5588.png"
              width={200}
              alt="img"
            />
            <div>(2K+ students)</div>
          </div>
          <button className="buy-now-btn" id="rzp-button1" onClick={()=>handleBuy(data)}>Buy Now</button>
          <hr />
          <div className="inner-box-course-rating1">
            <div className="container-box-course-inner-parent">
              <div className="strong-text-rate1">13K+</div>
              <div className="content-box-rate">students enrolled</div>
            </div>
            <div className="container-box-course-inner-parent">
              <div className="strong-text-rate1">6+</div>
              <div  className="content-box-rate">projects</div>
            </div>
            <div className="container-box-course-inner-parent">
              <div className="strong-text-rate1">16</div>
              <div  className="content-box-rate">months</div>
            </div>
            <div className="container-box-course-inner-parent">
              <div className="strong-text-rate1">140+</div>
              <div  className="content-box-rate">hours of video lectures</div>
            </div>
          </div>
        </div>
        <div className="child-box-course">
            <img className="img-course-seperate-page"src={data.detailurl}alt="img"/>
        </div>
      </div>
    )
}
export default CourseMap;
