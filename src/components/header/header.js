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
      <ul className="header__list">
        <li>
          <Link to="/people/">People</Link>
        </li>
        <li>
          <Link to="/planets/">Planets</Link>
        </li>
        <li>
          <Link to="/starships/">Starships</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/secret">Secret</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
