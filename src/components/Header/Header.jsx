import React from 'react';
import './Header.css';
import { assets } from '../../assets/assets';

const Header = () => {
  return (
    <div className="header">
      <video className="header-video" autoPlay loop muted>
        <source src={assets.headingvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="header-overlay">
        <h2>One Match Away from Your Next Move</h2>
                <p className="motivational-text">Unlock your potential and shape your future</p>
<br></br>
        <div className="search-section">
          <input type="text" placeholder="Search for jobs, companies..." />
          <button>Find a Job</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
