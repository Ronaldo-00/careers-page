import React, {useState,useEffect} from 'react'
import './Main.css'
import logo from '../../assets/figma.png'
const Main = () => {
  const [navLeft, setNavLeft] = useState('-100%');
  // on click to open nav
    const openToggle = () => {
      setNavLeft('0%');
    };
    // on click to close nav
    const closeToggle = () => {
      setNavLeft('-100%');
    };

  return (
    <div>
      <section className="banner">
        <div className="header">
          <div className="logo">
            <a href='#'>
              <img src={logo}></img>
              <h3>World</h3>
            </a>
          </div>
          {/* open button */}
            <button className="open-btn" onClick={openToggle}>&#9776;</button> 
          <nav id='mainNav' style={{ left: navLeft }}>
            <div className="navlinks" >
              {/* close button */}
              <button className="close-btn"onClick={closeToggle} >&times;</button>
              <ul> 
                <li><a href='#'>About</a></li>
                <li><a href='#'>Our Expertise</a></li>
                <li><a href='#'>Portfolio</a></li>
                <li><a href='#'>Resources</a></li>
                <li><a href='#'>News</a></li>
                <li><a href='#'>Careers</a></li>
              </ul>
            </div>
            <div className="btn-div">
              <button className='btn-1' type='button'>Contact</button>
            </div>
          </nav>
        </div>
        <div className="container">
          <div className="breadcrumb">
            <ul>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>Careers</a></li>
              <li><a href='#'>Jobs</a></li>
            </ul>
          </div>
          <div className="heading">
            <h1>Jobs</h1>
          </div>
        </div>   
      </section>
    </div>
  )
}

export default Main
