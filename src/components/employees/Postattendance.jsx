import React, { useEffect, useState } from "react";
import { axios } from "../Axios";

function Postattendance({ userid }) {
  const [attend, setAttend] = useState([]);
  const today = new Date().toLocaleDateString();
  useEffect(() => {
    
    axios.get(`/employees/${userid}`).then((res) => {
      setAttend(res.data)
    });
  }, [userid]);
  const Postdata = (e) => {
    e.preventDefault();
    const date = new Date().toLocaleDateString();
    const attendance = e.target.attendance.value;
    const aparture = e.target.aparture.value;
    const departure = e.target.departure.value;
    const id = attend.attendance.length+1;
    const att = {
      id,
      date,
      attendance,
      aparture,
      departure,
    };
    attend.attendance.push(att);

    axios
      .put(`/employees/${userid}/`, attend)
      .then((res) => {
        alert('saved attendance')
      })
      .catch(function (error) {
        console.log(error);
      });
     
  };

  return (
    <div>
      <span>Today : </span> <b>{today}</b>
      <form onSubmit={Postdata} className='att-form' >
        <label className="form-column">
          <span>Attendance  </span>
          <span>:</span>
          <select name="attendance" required>
            <option >present</option>
            <option >absent</option>
          </select>
        </label>
        <label className="form-column">
          <span>Aparture  </span>
          <span>:</span>
          <input name="aparture" type="time" required />
        </label>
        <label className="form-column">
          <span>Departure </span>
          <span>:</span>
          <input name="departure" type="time" required/>
        </label>
        <label className="form-column">
          <span></span>
          <span></span>
          <button className="btn">Post</button>
        </label>
      </form>
    </div>
  );
}

export default Postattendance;
