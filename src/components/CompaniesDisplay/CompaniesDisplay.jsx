import React, { useRef } from 'react';
import './CompanieDisplay.css';
import { companies } from '../../assets/assets';

const CompaniesDisplay = ({ category }) => {
  const containerRef = useRef(null);

  const filteredCompanies =
    category === 'All'
      ? companies
      : companies.filter(company => company.category === category);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 320;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="companies-wrapper">
      <div className="companies-inner">
              <h1>Our Hire Companies</h1>

        {/* Affiche les flèches seulement s'il y a des companies */}
        {filteredCompanies.length > 0 && (
          <>
            <button
              className="scroll-btn left"
              onClick={() => scroll('left')}
              aria-label="Scroll left"
            >
              &#60;
            </button>

            <button
              className="scroll-btn right"
              onClick={() => scroll('right')}
              aria-label="Scroll right"
            >
              &#62;
            </button>
          </>
        )}

        <div className="company-list" ref={containerRef}>
          {filteredCompanies.length > 0 ? (
            filteredCompanies.map(company => (
              <div key={company.id} className="company-card">
                <img src={company.cover} alt="cover" className="company-cover" />
                <div className="company-content">
                  <img src={company.logo} alt="logo" className="company-logo" />
                  <h2>{company.name}</h2>
                  <p>{company.description}</p>
                  <p><strong>Location:</strong> {company.location}</p>
                  <p><strong>Job:</strong> {company.jobTitle}</p>
                  <p><strong>Places:</strong> {company.jobSlots}</p>
                  <button className="details-btn">Details</button>
                </div>
              </div>
            ))
          ) : (
            <p style={{ padding: '20px', color: '#666', fontStyle: 'italic' }}>
              No offers available for this category.
            </p>
          )}
        </div>

        {/* Bande défilante des logos */}
        <div className="logo-track">
          {[...filteredCompanies, { spacer: true }, ...filteredCompanies].map((company, index) => (
          company.spacer ? (
              <div key={`spacer-${index}`} style={{ width: 100 }}></div> // espace entre deux sets
            ) : (
              <img
                key={`${company.id}-${index}`}
                src={company.logo}
                alt={company.name}
                className="marquee-logo"
              />
            )
          ))}
            </div>

              {filteredCompanies.length > 0 && (
                <div className="explore-more-container">
                  <button className="explore-more-btn">Explore More Companies</button>
                </div>
)}

      </div>
    </div>
  );
};

export default CompaniesDisplay;
