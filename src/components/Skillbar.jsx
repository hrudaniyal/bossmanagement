import React, { useEffect, useState } from "react";
import { axios } from "./Axios";
import '../css/about.css'
function Skillbar() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    axios.get("about/1").then((res) => {
      setSkills(res.data.skills);
    });
  }, []);
  return (
    <div>
         <h3>My Skills Bar : </h3>
         <lable className="skillbar">
            <span>  </span>
            <span> </span>
            <div style={{display:"grid",gridTemplateColumns:"25% 25% 25% 25%"}}>
              <span style={{margin:'2px',background:'#f33',height:'3px'}}></span>
              <span style={{margin:'2px',background:' rgb(255, 168, 7)',height:'3px'}}></span>
              <span style={{margin:'2px',background:'#00f',height:'3px'}}></span>
              <span style={{margin:'2px',background:'#0f0',height:'3px'}}></span>
            </div>
           
          </lable>
      {skills.map((skill) => {
        return (
          <lable className="skillbar">
            <span>{skill.name} </span>
            <span>:</span>
            <input type="range" value={skill.value} />
          </lable>
        );
      })}
    </div>
  );
}

export default Skillbar;
