import React from 'react';
import './Header.css';

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="header">
      {title?.toUpperCase()}
    </div>
  );
};

export default Header;
