import Axios from '../Axios'
import React, { useEffect, useState } from 'react'

function Feedbacks() {
    const [feedback,setFeedback]= useState([])
    useEffect(()=>{
         Axios.get('/feedback').then(res=>{
             setFeedback(res.data)
             console.log(res.data)
         }).catch(error=>console.log(error))
    },[])
    return (
        <div>
            <h2>Feedbacks from users</h2>
            <span>Total Feedback fetched : {feedback.length}</span>
            {
                feedback.map(cont=>{
                    const {id,fullname,email,mobile,text} = cont
                    return(
                    <div key={id} className='show-feedback'>
                         
                         <div>
                             <div>
                         <h3><span className='sm-hole'>{id} </span>{fullname}</h3>
                         </div>
                         <div className='feedback-column '>
                             <span>Email</span><span>:</span><span className='res-feed'>{email}</span>
                         </div>
                          <div className='feedback-column '>
                              <span>Mobile</span><span>:</span><span className='res-feed'>{mobile}</span>
                          </div>
                          <div className='feedback-column '>
                              <span>Text</span><span>:</span><span className='res-feed'>{text}</span>
                          </div>
                         </div>
                         <hr />
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Feedbacks
