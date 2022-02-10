import React, { useEffect, useState } from "react";
import axios from "../Axios";
function EmployeeAttendance() {
  const [attendance, setAttend] = useState([{}]);
  const id = localStorage.getItem("currentuserid");
  useEffect(async () => {
    await axios.get(`employees/${id}`).then((res) => {
      setAttend(res.data.attendance);
    });
  }, [id]);
  return (
    <div>
      <h2>Attendance</h2>
      <h4>Total Attendance : {attendance.length}</h4>
      {attendance.map((att) => {
        const {id, date, attendance, aparture, departure } = att;
        return (
          <div>
            <span className='att-id'>{id}</span>
            <div className="att-row">
              
              <div className="att-label">
                <span>date </span>
                <span>:</span>
                <span style={{color:'#bbb'}}>{date}</span>
              </div>
              <div className="att-label">
                <span>aparture </span>
                <span>:</span>
                <span style={{color:'#bbb'}}>{aparture}</span>
              </div>
              <div className="att-label">
                <span>departure </span>
                <span>:</span>
                <span style={{color:'#bbb'}}>{departure}</span>
              </div>

              <div className="att-label">
                <span>attendance </span>
                <span>:</span>
                <div>
                  <span
                    style={{ color: attendance === "absent" ? "red" : "white" }}
                  >
                    {attendance}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default EmployeeAttendance;
