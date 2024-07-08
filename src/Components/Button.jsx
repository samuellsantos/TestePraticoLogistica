import React from 'react';

const Button = ({ children }) => {
  return (
    <button className="py-4 px-7 rounded-sm  bg-blue text-white transition-all hover:bg-opacity-95">
      {children}
    </button>
  );
};

export default Button;
