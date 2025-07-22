import React, { useEffect, useState } from 'react';
import './ScrollToTopButton .css' // n'oublie pas de créer ce fichier CSS aussi

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200); // bouton visible après 200px de scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return isVisible ? (
    <button className="scroll-to-top-btn" onClick={scrollToTop}>
      ⬆
    </button>
  ) : null;
};

export default ScrollToTopButton;
