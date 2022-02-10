import React, { useEffect, useState } from "react";
import { axios } from "../Axios";
import "../../css/boss_overview_table.css";
import TableBody from './compo/TableBody'
const OverviewTable = () => {
  const [employees, setEmployees] = useState([]);
  const [boss, setBoss] = useState({});
  const [attendance, setAttendance] = useState([]);
  const [filterEmployees, setFilterEmployees] = useState();
  const renderEmployee = filterEmployees ? filterEmployees : employees;
  console.log(attendance)

  useEffect(() => {
    fetchEmployees();
  }, []);
  const fetchEmployees = async () => {
    await axios.get("/employees").then((res) => {
      setEmployees(res.data);
    });
  };

  const DateFilter = (e) => {
    const date = e.target.value;
    const result = employees.filter((e) => e.attendance === date);
    setAttendance(result);
    console.log(date);
  };
  const Searchbar = (e) => {
    const input = e.target.value;
    const result = employees.filter((e) => {
      return Object.values(e).join().includes(input);
    });
    setFilterEmployees(result);
  };

  return (
    <div>
      <div className="dash-filter">
        <ul>
          <li>
            <input type="date" onChange={DateFilter} />
          </li>
          <li>filter 2</li>
        </ul>
        <ul>
          <li>
            <input
              type="text"
              onChange={Searchbar}
              placeholder="search"
              
            /> 
            <i >g</i>
          </li>
        </ul>
      </div>
      <table className="table">
        <thead>
          <tr className="theading">
            <td className="ttitle">S/L</td>
            <td className="ttitle">Date</td>
            <td className="ttitle">Name</td>
            <td className="ttitle">Attendance</td>
            <td className="ttitle">Salary</td>
            <td className="ttitle">Joining date</td>
            <td className="ttitle">Position</td>
          </tr>
        </thead>
        <TableBody renderEmployee={renderEmployee} Attendance={attendance} />
      </table>
    </div>
  );
};
export default OverviewTable;
