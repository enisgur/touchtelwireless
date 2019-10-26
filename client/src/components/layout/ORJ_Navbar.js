import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className="topNav">
        <div className="bodyTopNav">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="headerBody">
        <div className="bodybody">
          <h1>Touch Tel Wireless</h1>
          <h3>Your local phone, tablet repair and accessories place.</h3>
          <Link className="button" to="#fix">
            Broken Device ?
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
