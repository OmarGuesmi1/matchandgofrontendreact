import React, { useState } from 'react';
import './SignIn.css';
import { assets } from '../../assets/assets'; // auth, auth2, auth3, matchgoauth

const slides = [
  {
    image: assets.auth,
    bgColor: '#4CAF50',
    title: 'Find Jobs That Match You',
    description:
      'Log in to receive job suggestions based on your profile, and never miss the right opportunity again.',
  },
  {
    image: assets.auth2,
    bgColor: '#1976D2',
    title: 'Stay Ahead of the Competition',
    description:
      'Log in to activate job alerts, save your favorite roles, and apply before anyone else does.',
  },
  {
    image: assets.auth3,
    bgColor: '#9C27B0',
    title: 'Join a Community of Job Seekers',
    description:
      'Your account gives you access to real opportunities, tailored job alerts, and insider insights.',
  },
];

const SignIn = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const { image, bgColor, title, description } = slides[currentSlide];

  return (
    <div className="signin-container">
      {/* Colonne gauche */}
      <div className="signin-left" style={{ backgroundColor: bgColor }}>
        {/* Logo */}
        <div className="signin-logo-top">
          <img src={assets.matchgoauth} alt="Logo" className="logo-image-large" />
        </div>

        {/* Image + flèches */}
        <div className="signin-image-with-arrows">
          <button className="arrow-btn" onClick={handlePrev}>&lt;</button>
          <img src={image} alt="Authentication" className="signin-image" />
          <button className="arrow-btn" onClick={handleNext}>&gt;</button>
        </div>

        {/* Texte dynamique */}
        <div className="signin-text">
          <h2>{title}</h2>
          <h4>{description}</h4>
        </div>
      </div>

      {/* Colonne droite */}
     <div className="signin-card">
  <h2 className="signin-title">Welcome Back to Match&Go</h2>

  <form className="signin-form">
    <input type="email" placeholder="Email address" required />
    <input type="password" placeholder="Password" required />
    <button type="submit" className="btn-signin">Sign In</button>
  </form>

  <div className="signin-or">or sign in with</div>
  <div className="signin-socials">
    <button className="social-btn">
      <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google" />
    </button>
    <button className="social-btn">
      <img src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn" />
    </button>
  </div>

  <div className="signin-links">
    <a href="#" className="link">Forgot Password?</a>
    <span> | </span>
    <a href="#" className="link">Sign Up</a>
  </div>

  <div className="signin-note">
    <strong>Looking for your next opportunity?</strong><br />
    Sign in to explore curated job offers, track your applications, and<br />
    connect with recruiters across your industry.
  </div>
</div>

    </div>
  );
};

export default SignIn;
