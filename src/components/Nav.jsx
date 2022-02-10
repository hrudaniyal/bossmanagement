import React, { createRef, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import '../css/nav.css'
function Nav() {
  const expandref = useRef()
  const isOpen = true
  const [x,setX] = useState("-50%")
  // console.log(expandref.current.style.display)
  const color = localStorage.getItem('color')
  const Toggle = () => {
    x==='-50%'?setX(0):setX("-50%")      
  }
  return (
    <>
      <nav className="nav" style={{ background: color }} >
        <div className='expand' onClick={Toggle}>
          <img src='/svg/expand.svg' className='expand-icon' />
        </div>

        <div style={{display:'flex'}} >
          <Link  to="/"><img className='logo' src='/svg/hruda logo.svg'  alt='logo' /></Link>
     
          <Link to="/about" className="link"  >
            About
          </Link>
          <Link to="/feedback" className="link"  >
            Feedback
          </Link>
        </div>
        <div className='login'>
          <Link to="/bosslogin" className="link"   >
            Login as Boss
          </Link>
          <Link to="/employeeslogin" className="link"  >
            Login as Employees
          </Link>
        </div>
        <section className='sidenav' ref={expandref} style={{left:x}} >
          <div className='expand' onClick={Toggle}>
            <img src='/svg/expand_close.svg' className='expand-icon' />
          </div>
          <div>
            <Link to="/about" className="sidelink"  >
              About
          </Link>
            <Link to="/feedback" className="sidelink"  >
              Feedback
          </Link>
          </div>
          <div className='login'>
            <Link to="/bosslogin" className="sidelink"   >
              Login as Boss
          </Link>
            <Link to="/employeeslogin" className="sidelink"  >
              Login as Employees
          </Link>
          </div>
        </section>
      </nav>
    </>
  );
}

export default Nav;
