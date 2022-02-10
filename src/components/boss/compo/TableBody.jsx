import React from "react";
import { Link } from "react-router-dom";

function TableBody({renderEmployee,Attendance}) {
 console.log(renderEmployee)

  return (
    <tbody>
      {  (
       
        renderEmployee.map((v) => {
          const {
            id,
            fullname,
            username,
            attendance,
            jobposition,
            salary,
            joiningdate,
          } = v;
          const today = new Date().toLocaleDateString();
          const att = !Attendance
            ? attendance.filter((v) => v.date === today)
            : Attendance.filter((v) => v.date === today);
          // saving username to localstorage
          const saveCurrentUser = () => {
            sessionStorage.setItem("currentemployee", username);
          };
          const attStatus = () => (att.length === 0 ? "pending" : "present");
          return (
            <tr className="theading" key={id}>
              <td className="tdata">{id}</td>
              <td className="tdata">{today}</td>
              <td className="tdata">
                <Link
                  className="navLink"
                  onClick={saveCurrentUser}
                  to={`/bossdashbord/overview/${id}`}
                >
                  {fullname}
                </Link>
              </td>
              <td className="tdata">{attStatus()}</td>

              <td className="tdata">{salary}</td>
              <td className="tdata">{joiningdate}</td>

              <td className="tdata">{jobposition}</td>
            </tr>
          );
        })
 
      ) }
    </tbody>
  );
}

export default TableBody;
