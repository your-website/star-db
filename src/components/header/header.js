import React from 'react';
import { Link } from 'react-router-dom'
import './header.css';

const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">
          Star DB
        </Link>
      </h3>
    </div>
  );
};

export default Header;
