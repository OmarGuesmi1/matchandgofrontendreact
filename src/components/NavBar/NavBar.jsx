import React from 'react';
import './NavBar.css'; // Assuming you have a CSS file for styling
import { useState } from 'react';
import SignIn from '../SignIn/SignIn.jsx';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets'; // Adjust the path as necessary
const NavBar = ({ showSignIn, setShowSignIn }) => {
    const [menu, setMenu] = useState("home");
      // 🔒 Bloquer le scroll du body quand SignIn est ouvert
  useEffect(() => {
    if (showSignIn) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto'; // Nettoyage si le composant est démonté
    };
  }, [showSignIn]);
  return (
    <>
        <div className='navbar'>
            <img src={assets.namelogo} alt="Logo" className="logo" />
            <ul className='navbar-menu'>
                <Link to="/"><li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li></Link>
                <Link to="/FindJob"><li onClick={() => setMenu("FindJob")} className={menu === "FindJob" ? "active" : ""}>Find a job</li></Link>
                <Link to="/find-company"><li onClick={() => setMenu("find-a-company")} className={menu === "find-a-company" ? "active" : ""}>Find a company</li></Link>
                <Link to="/forum"><li onClick={() => setMenu("forum")} className={menu === "forum" ? "active" : ""}>Forum</li></Link>
            </ul>
            <div className="navbar-right">
                <ul className='navbar-right-menu'>
                    <li onClick={() => setMenu("applications")} className={menu === "applications" ? "active" : ""}>Applications</li>
                    <li>
              <button className="signin-btn" onClick={() => setShowSignIn(true)}>Sign in</button>
            </li>
          </ul>
        </div>
      </div>

      
      {showSignIn && (
        <div className="modal-overlay" onClick={() => setShowSignIn(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <SignIn onClose={() => setShowSignIn(false)} />
          </div>
        </div>
      )}
    </>
  );
};
export default NavBar;