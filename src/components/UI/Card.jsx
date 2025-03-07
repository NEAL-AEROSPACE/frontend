import React from 'react';

function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

export default Card;