import React from 'react';
import { Link } from 'gatsby';

const Navigation = () => {
  return (
    <nav className="nav-container">
      <div className="brand">
        <Link to="/">
          <span className="text">
            <span className="emoji" role="img" aria-label="Computadora">
              💻
            </span>
            Programatis
          </span>
        </Link>
      </div>
      <div className="links">
        <Link to="/acerca">
          <span>Acerca</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
