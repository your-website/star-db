import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="/index">
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="/index">People</a>
        </li>
        <li>
          <a href="/index">Planets</a>
        </li>
        <li>
          <a href="/index">Starships</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;