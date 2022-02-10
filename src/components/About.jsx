import { axios } from "./Axios";
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Skillbar from "./Skillbar";
import Skilldetails from './Skilldetails'
import '../css/about.css'
import { Helmet } from "react-helmet";
function About() {
  const [aboutdata, setAboutdata] = useState({});
  const { name, image, about,banner } = aboutdata;
  const topics = ["html","css","javascript","jquery","react","bootstrap","json",];
  useEffect(() => {
    axios.get("/about/1").then((res) => setAboutdata(res.data));
  }, [name]);

  return (
    <div>
      <Nav />
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className="about-heading">
        <img src={banner} className="about-back-img" alt={name} />
        <img src={image} className="about-profile-img" alt={name} />
        <h1 className="about-name">{name}</h1>
      </div>
      <div className="about">
        <div className="about-text">
          <h3>Some About Of Me : </h3>
          <p>{about}</p>
        </div>
        <div className="about-skill">
          <Skillbar />
        </div>
      </div>
      <div className="dashbord">
        <div className="dashside">
          {topics.map((v) => {
            return (
              <li className="sidemenu">
                <span className="ho-circle"></span>
                <a href={`#${v}`} className="Link">
                  {v}
                </a>
              </li>
            );
          })}
        </div>
        <div className="dashmain skill-details">
          <Skilldetails />
        </div>
      </div>
    </div>
  );
}
export default About