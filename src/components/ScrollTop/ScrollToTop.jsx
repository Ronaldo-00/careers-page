import React, { useState, useEffect } from 'react';
import './Scroll.css'
const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    const toggleVisibility = () => {
        if (window.scrollY > 40) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
    
      useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
          window.removeEventListener('scroll', toggleVisibility);
        };
      }, []);
    
  return (
    <div>
        {isVisible && (
        <button onClick={scrollTop} className="scroll-to-top-button">&uarr;</button>
      )}
    </div>
  )
}

export default ScrollToTop
