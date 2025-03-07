import React from 'react';

function Header({ title, subtitle }) {
  return (
    <div className="bg-slate-800 text-white py-20 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      {subtitle && <p className="max-w-xl mx-auto">{subtitle}</p>}
    </div>
  );
}

export default Header;