//imported useState, react-scroll, and logo
import React, { useState } from "react";
import logo from '../images/logo.png';
import { Link } from 'react-scroll';
//Function to show the header for all pages depends on the screen size
function Navbar() {
    const handleClick = () => {
        alert("www.google.com")
    }
    // This function sets the header navbar according to the screen size
    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        }
        else {
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
    // Navigation links for every page and set duration 2000
    return (
        <nav className={nav ? "nav active" : "nav"}>
            <Link to="main" className="logo" smooth={true} duration={1000}>
                <img src={logo} alt='' />
            </Link>
            <input className="menu-btn" type='checkbox' id='menu-btn' />
            <label className="menu-icon" for="menu-btn">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li><Link to='main' smooth={true} duration={1000}>Home</Link></li>
                <li><Link to='login' smooth={true} duration={1000}>LOGIN</Link></li>
                <li><Link to='features' smooth={true} duration={1000}>Features</Link></li>
                <li><Link to='presentaion' smooth={true} duration={1000}>Offer</Link></li>
                <li><Link to='about' smooth={true} duration={1000}>About</Link></li>
                <li><Link to='contact' smooth={true} duration={1000}>ContactUs</Link></li>
                <li><Link to="error">Search</Link></li>
                <textarea onClick={handleClick}></textarea>
            </ul>
        </nav>
    )
}
export default Navbar;