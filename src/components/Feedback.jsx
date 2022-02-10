import axios from "./Axios";
import React  from "react";
import Nav from "./Nav";
import { useHistory } from "react-router";
import '../css/feedback.css'
function Feedback() {
     const go = useHistory()
     console.log(go)
    const postfeedback=(e)=>{
       e.preventDefault()
       const fullname = e.target.fullname.value
       const email = e.target.email.value
       const mobile = e.target.mobile.value
       const text = e.target.text.value
       const feedback = {fullname,email,mobile,text}
       console.log(feedback)
       axios.post('/feedback',feedback).then(res=>console.log(res.data)).catch(error=>console.log(error))
       alert('you have posted data !!! ')
       go.push('/')
    }
  return (
    <>
      {go.location.pathname === '/' ? '' : <Nav />}
      <div className="feedback" onSubmit={postfeedback}>
        <h2>feedback Us : </h2>
        <form className="feedback-form">
          <label className="feedback-column">
            <span>Fullname </span> <span>:</span>
            <input type="text" name="fullname" placeholder="fullname..." />
          </label>
          <label className="feedback-column">
            <span>Email </span> <span>:</span>
            <input type="mail" name="email" placeholder="email..." />
          </label>
          <label className="feedback-column">
            <span>Mobile </span>
            <span>:</span>
            <input
              type="number"
              name="mobile"
              placeholder="mobile number..."
            />
          </label>
          <label className="feedback-column">
            <span>Text </span>
            <span>:</span>
            <textarea
              type="text"
              name="text"
              rows="5"
              placeholder="write something..."
            ></textarea>
          </label>
          <label className="feedback-column">
            <span></span>
            <span></span>
            <button className="feedback-submit">Submit</button>
          </label>
        </form>
      </div>
    </>
  );
}

export default Feedback;
