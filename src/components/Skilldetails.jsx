import { useEffect, useState } from "react";
import { axios } from "./Axios";

function Skilldetails() {
  const [books, setBooks] = useState({topic:[]});
  console.log(books);
  useEffect(() => {
    axios.get("/about/1").then((res) => {
      setBooks(res.data);
    });
  }, []);

  return (
    <div>
      {books.topic.map((topic) => {
        return <div className="skill" id={`#${topic.name}`}>
          <h3 className='skill-head'>{`What is ${topic.name}`}</h3>
          <div className='skill-content'>
            <img src={topic.img} alt={topic.name} className="skill-content-img" />
            <p>{topic.text}</p>
          </div>
          <div className="skill-template">
            {topic.templates.map((img) => {
            return (
              
                <img src={img} alt={img} className="skill-template-img" />
               
            );
          })} 
          </div>
        </div>;
      })}
    </div>
  );
}
export default Skilldetails;
