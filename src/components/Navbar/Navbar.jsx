/*
import React, { useState } from 'react';
import './Navbar.css';
import logo from "../../assets/logo.png";


const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

  return ( 
    <nav className='container'>

<img src={logo} alt="logo" className='logo'/>

<ul className={menuOpen ? 'nav-links active' : 'nav-links'} >
    <li>Home</li>
    <li>Program</li>
    <li>About us</li>
    <li>Campus</li>
    <li>Testimonials</li>
    <li><button className='btn'>Contact us</button></li>
</ul>

<div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      
    </nav>
  )
}

export default Navbar
*/


import React, {useEffect, useState } from 'react';
import './Navbar.css';
import logo from "../../assets/logo.png";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [sticky,setSticky]=useState(false);

  useEffect(() =>{

    window.addEventListener("scroll",()=>{
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
    }) 

  },[])

  return (
    <nav className={` "container"  ${sticky ? 'dark-nav' :"" }`}>

      <img src={logo} alt="logo" className='logo'/>

<ul className={menuOpen ? 'nav-links active' : 'nav-links'} >
    <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
    <li><Link to='Programs' smooth={true} offset={-260} duration={500}>Program</Link></li>
    <li><Link to='aboutUs' smooth={true} offset={-150} duration={500}>About us</Link></li>
    <li><Link to='Campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
    <li><Link to='Testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
    <li><button className='btn'><Link to='contactUs' smooth={true} offset={-260} duration={500}>Contact us</Link></button></li>
</ul>



      {/* Hamburger / Close icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✖' : '☰'}  {/* ✖ is the close icon */}
      </div>

    </nav>
  )
}

export default Navbar;
