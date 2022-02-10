import React, { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { axios } from "../Axios";
import AddEmployee from "./AddEmployee";
import OverviewTable from "./OverviewTable";
import Profile from "./Profile";
import Feedbacks from './Feedbacks'
import Notfound from "../../Notfound";
import '../../css/dashbord.css'
function Bossdashbord() {
  const [boss, setBoss] = useState({});
  const [left,setLeft] = useState('-100%')
  const { image, name } = boss;
 
  const Toggle =()=> {
    left==='-100%' ?setLeft(0) :  setLeft("-100%")
    
  }
  useEffect(() => {
    fetchBoss();
  }, []);
  const fetchBoss = async () => {
    axios.get("/boss/1").then((res) => setBoss(res.data));
  };

  const Logout = (e) => {
    window.location = '/'
    alert('logout successfully!!!')
    localStorage.clear()
  }
  return (
    <div>
      <div className="dashbord">
        <section className='expand' onClick={Toggle}>
            <img src='/svg/expand.svg' style={ {background:"black"}} alt='expand' />
        </section>
        <div style={{left:left}} className="dash-side">
          <div className="profile">
          <section className='close-expand' onClick={Toggle}>
            <img src='/svg/expand_close.svg' style={{ background:"black"}} alt='expand' />
        </section>
            <img className="sm-img" src={image} alt={name} />
            <h4>{name}</h4>
          </div>

          <li className="sidemenu" >
            <span className="ho-circle"></span>{" "}
            <Link className="Link" to="/bossdashbord/attendances">
              Employees
              </Link>
          </li>
          <li className="sidemenu">
            <span className="ho-circle"></span>
            <Link className="Link" to="/bossdashbord/profile">
              Profile
              </Link>
          </li>

          <li className="sidemenu">
            <span className="ho-circle"></span>
            <Link className="Link" to="/bossdashbord/addemployee">
              Add Employee
              </Link>
          </li>
          <li className="sidemenu">
            <span className="ho-circle"></span>
            <Link className="Link" to="/bossdashbord/feedbacks">
              Feedbacks
              </Link>
          </li>
          <li className="sidemenu" onClick={Logout}>
            <span className="ho-circle"></span>
            <Link className="Link" to="/bossdashbord">
              Logout
              </Link>
          </li>

        </div>
        <div className="dash-main">
          <Switch >
            <Route exact path='/bossdashbord/attendances' component={OverviewTable} />
            <Route exact path='/bossdashbord/profile' component={Profile} />
            <Route exact path='/bossdashbord/addemployee' component={AddEmployee} />
            <Route exact path='/bossdashbord/feedbacks' component={Feedbacks} />
            <Route exact path='/bossdashbord' component={OverviewTable} />
            <Route path='/bossdashbord/*' component={Notfound} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Bossdashbord;
