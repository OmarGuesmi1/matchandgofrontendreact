import React from 'react';
import './CompaniesExplore.css';
import { categories } from '../../assets/assets';

const CompaniesExplore= ({ category, setCategory }) => {
   
  return (
    <div className="explore-companies">
      <h1>Explore companies</h1>
      <p>Uncover their journey, meet their team, experience their culture.</p>
      <div className="explore-companies-buttons">
        {categories.map((item, index) => (
          <button
            key={index}
            className={category === item ? 'active' : ''}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}


export default CompaniesExplore;
