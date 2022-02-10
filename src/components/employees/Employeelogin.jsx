import React, { useEffect, useState } from "react";
import Nav from "../Nav";
import axios from "../Axios";
import '../../css/login.css'
function Employeelogin() {
  const [employees, setEmployees] = useState([{}]);
  useEffect(() => {
    axios.get("/employees").then((res) => {
      setEmployees(res.data);
    });
  }, []);
  const Login = (e) => {
    e.preventDefault();
    const uname = e.target.username.value;
    const pword = e.target.password.value;
    const currentuser = employees.filter((e) => e.username === uname);
    console.log(currentuser)
    // const { username, password, id } = currentuser[0];
    if (currentuser.length === 0) {
      alert('this user is not in database')
    }
    else {
      if (currentuser[0].username === uname && currentuser[0].password === pword) {
        window.location = `/employeesdashbord`;
        localStorage.setItem("currentuserid", currentuser[0].id);
      } else alert("username and password is wrong");
    }
  }
  return (
    <div>
      <Nav />
      <h3 className='title'>Employees Login</h3>
      <form className="login-form" onSubmit={Login}>
        <label className="form-column">
          <span>Username  </span>
          <span>:</span>
          <input type="text" name="username" />
        </label>
        <label className="form-column">
          <span>Password </span>
          <span>:</span>
          <input type="password" name="password" />
        </label>
        <label className="form-column">
          <span> </span>
          <span></span>
          <input className="btn" type="submit" value="Sign In" />
        </label>
      </form>
    </div>
  );
}

export default Employeelogin;
