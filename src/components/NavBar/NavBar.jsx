import React from 'react';
import './NavBar.css'; // Assuming you have a CSS file for styling
import { useState } from 'react';
import { assets } from '../../assets/assets'; // Adjust the path as necessary
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [menu, setMenu] = useState("home");
  return (
        <div className='navbar'>
            <img src={assets.namelogo} alt="Logo" className="logo" />
            <ul className='navbar-menu'>
                <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
                <li onClick={() => setMenu("find-a-job")} className={menu === "find-a-job" ? "active" : ""}>Find a job</li>
                <li onClick={() => setMenu("find-a-company")} className={menu === "find-a-company" ? "active" : ""}>Find a company</li>
                <li onClick={() => setMenu("media")} className={menu === "media" ? "active" : ""}>Media</li>
            </ul>
            <div className="navbar-right">
                <ul className='navbar-right-menu'>
                    <li onClick={() => setMenu("applications")} className={menu === "applications" ? "active" : ""}>Applications</li>
                    <li>
                    <Link to="/SignIn" className="signin-btn" >Sign in</Link>                     
                     </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
