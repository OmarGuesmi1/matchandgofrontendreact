import React, { useState, useEffect } from 'react';
import './NavBar.css';
import SignIn from '../SignIn/SignIn.jsx';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const NavBar = ({ showSignIn, setShowSignIn }) => {
  const [menu, setMenu] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // ✅ hook de navigation

  // Vérifier si un token existe au chargement
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  // Bloquer le scroll quand SignIn est ouvert
  useEffect(() => {
    document.body.style.overflow = showSignIn ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showSignIn]);

  // Fonction logout
const handleLogout = () => {
    localStorage.removeItem("token");
    setMenu("home"); // ✅ remettre le menu sur "home"
    setIsLoggedIn(false);
    toast.info("🚪 Logged out successfully!");
    navigate("/"); // ✅ redirige immédiatement vers Home
  };




  return (
    <>
      <div className='navbar'>
        <img src={assets.namelogo} alt="Logo" className="logo" />
        <ul className='navbar-menu'>
          <Link to="/"><li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li></Link>
          <Link to="/FindJob"><li onClick={() => setMenu("find-a-job")} className={menu === "find-a-job" ? "active" : ""}>Find a job</li></Link>
          <Link to="/find-company"><li onClick={() => setMenu("find-a-company")} className={menu === "find-a-company" ? "active" : ""}>Find a company</li></Link>
<Link 
  to={isLoggedIn ? "/forum" : "#"} 
  onClick={(e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      toast.error("⚠️ Please sign in to access the forum!");
      setShowSignIn(true); // ✅ ouvre la popup SignIn
    } else {
      setMenu("forum");
    }
  }}
>
  <li className={menu === "forum" ? "active" : ""}>Forum</li>
</Link>

        </ul>
        <div className="navbar-right">
          <ul className='navbar-right-menu'>
            <li onClick={() => setMenu("applications")} className={menu === "applications" ? "active" : ""}>Applications</li>
            <li>
              {isLoggedIn ? (
                <button className="signin-btn" onClick={handleLogout}>Log out</button>
              ) : (
                <button className="signin-btn" onClick={() => setShowSignIn(true)}>Sign in</button>
              )}
            </li>
          </ul>
        </div>
      </div>

      {/* Modal SignIn */}
      {showSignIn && (
        <div className="modal-overlay" onClick={() => setShowSignIn(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <SignIn 
              onClose={(loggedIn) => {
                setShowSignIn(false);
                if (loggedIn) setIsLoggedIn(true); 
              }} 
            />
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;