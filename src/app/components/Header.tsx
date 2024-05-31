import React from 'react';
import './Header.css'; // Make sure to create this CSS file

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="header">
      {title?.toUpperCase()}
    </div>
  );
};

export default Header;
