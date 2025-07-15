import React from 'react';
import { jobCategories } from '../../assets/assets'; // adapte le chemin selon ton projet
import './CompaniesExplore.css';

const CompaniesExplore = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Career Paths</h1>
      <p className='explore-menu-text'>
        Choose a category to find opportunities that match your passion.
      </p>

      <div className="explore-menu-list">
        {jobCategories.map((name, index) => {
          const isActive = category === name;

          return (
            <div
              key={index}
              onClick={() => setCategory(prev => (prev === name ? "All" : name))}
              className={`explore-menu-list-item ${isActive ? "active" : ""}`}
            >
              <p>{name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompaniesExplore;
