import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { assets } from '../../assets/assets';
import SignIn from '../SignIn/SignIn';
import { Link, useLocation } from 'react-router-dom';

const NavBar = ({ showSignIn, setShowSignIn }) => {
  const location = useLocation();

  // 🔒 Bloquer le scroll du body quand SignIn est ouvert
  useEffect(() => {
    document.body.style.overflow = showSignIn ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [showSignIn]);

  // 🔎 Détecter la route active pour le menu
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    return location.pathname.startsWith(path) && path !== '/';
  };

  return (
    <>
      <div className='navbar'>
        <img src={assets.namelogo} alt="Logo" className="logo" />
        
        <ul className='navbar-menu'>
          <li className={isActive('/') ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={isActive('/FindJob') ? "active" : ""}>
            <Link to="/FindJob">Find a job</Link>
          </li>
          <li className={isActive('/FindCompany') ? "active" : ""}>
            <Link to="/FindCompany">Find a company</Link>
          </li>
          <li className={isActive('/Media') ? "active" : ""}>
            <Link to="/Media">Media</Link>
          </li>
        </ul>

        <div className="navbar-right">
          <ul className='navbar-right-menu'>
            <li className={isActive('/Applications') ? "active" : ""}>
              <Link to="/Applications">Applications</Link>
            </li>
            <li>
              <button className="signin-btn" onClick={() => setShowSignIn(true)}>Sign in</button>
            </li>
          </ul>
        </div>
      </div>

      {/* === Modale SignIn === */}
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
