import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "../Axios";
import { Link, Switch, Route } from "react-router-dom";
import Postattendance from "./Postattendance";
import Employeeprofile from './Employeeprofile'
import { AuthContext } from "../AuthContext";
import EmployeeAttendance from "./EmployeeAttendance";
function Employeedetails() {
  const [currentemployee, setCurrentemployee] = useState({});
  const id = localStorage.getItem("currentuserid");
  
  const [left, setLeft] = useState("-100%");
  const [right,setRight] =useState('100% ')
  const [opacity,setOpacity] =useState('100%')
  
  const Toggle = () => {
    left === "-100%" ? setLeft("0px") : setLeft("-100%");
    left==='0px'?setRight("200px"):setRight("0px")
    left==="0px"?setOpacity('100%'):setOpacity('50%')
  };
  useEffect(() => {
    axios.get(`/employees/${id}`).then((res) => {
      setCurrentemployee(res.data);
    });
  }, [id]);
  const logout = () => {
    setIsLoggedIn(!isLoggedIn);
    alert("successfully logout");
    window.location = "/";
  };
  // context work
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  return (
    <>
      <div className="dashbord" >
        <section className="expand" onClick={Toggle}>
          <img
            src="/svg/expand.svg"
           
            style={{ background: "black" }}
            alt="expand"
          />
        </section>
        <div style={{ left: left }} className="dash-side" >
          <section className="close-expand" onClick={Toggle}>
            <img
              src="/svg/expand_close.svg"
              style={{ background: "black" }}
              alt="expand"
            />
          </section>

          <div className="profile">
            <img
              className="sm-img"
              src={currentemployee.image}
              alt={currentemployee.fullname}
            />
            <h4>{currentemployee.fullname}</h4>
            <span>{currentemployee.jobposition}</span>
          </div>

          <li className="sidemenu">
            <span className="ho-circle"></span>{" "}
            <Link className="Link" to="/employeesdashbord/setattendance">
              Set_Attendances
            </Link>
          </li>
          <li className="sidemenu">
            <span className="ho-circle"></span>
            <Link className="Link" to="/employeesdashbord/profile">
              Profile
            </Link>
          </li>
          <div>
            <li className="sidemenu">
              <span className="ho-circle"></span>
              <Link className="Link" to="/employeesdashbord/employeeattendance">
                Attendances
              </Link>
            </li>

            <button className="button" onClick={logout}>
              {isLoggedIn ? currentemployee.fullname : "logout"}
            </button>
          </div>
        </div>
        <div className="dash-main" style={{filter:`brightness(${opacity})` ,height:'100%'}}>
        
          <Switch>
            <Route path="/employeesdashbord/setattendance">
              <Postattendance currentemployee={currentemployee} userid={id} />
            </Route>
            <Route path="/employeesdashbord/profile">
            <Employeeprofile currentemployee={currentemployee} />
            </Route>
            <Route path="/employeesdashbord/employeeattendance">
              <EmployeeAttendance attendance={currentemployee.attendance} />
            </Route>
            <Route exact path="/employeesdashbord">
            <Employeeprofile currentemployee={currentemployee} />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
}

export default Employeedetails;
