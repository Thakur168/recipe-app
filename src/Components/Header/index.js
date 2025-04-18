import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useUser } from '../../UserContext';
import './Header.css';

function Header() {
  const { user, setUser } = useUser();
  const history = useHistory();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const logout = () => {
    setUser(null);
    history.push('/');
    setMenuOpen(false);
  };

  const toggleMenu = () => setMenuOpen(open => !open);

  return (
    <header className="header">
      <Link to="/" className="brandLogo">
        The Recipe Vault
      </Link>

      {/* hamburger button */}
      <button
        className="nav-toggle"
        aria-label="Toggle navigation"
        onClick={toggleMenu}
      >
        <span className={`hamburger ${menuOpen ? 'open' : ''}`} />
      </button>

      <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <Link
          to="/"
          className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/recipes"
          className={`nav-link ${
            location.pathname === '/recipes' ? 'active' : ''
          }`}
          onClick={() => setMenuOpen(false)}
        >
          Recipes
        </Link>
        <Link
          to="/about-us"
          className={`nav-link ${
            location.pathname === '/about-us' ? 'active' : ''
          }`}
          onClick={() => setMenuOpen(false)}
        >
          About Us
        </Link>
        <Link
          to="/contact-us"
          className={`nav-link ${
            location.pathname === '/contact-us' ? 'active' : ''
          }`}
          onClick={() => setMenuOpen(false)}
        >
          Contact Us
        </Link>

        {user?.email && (
          <Link
            to="/recipe-list"
            className={`nav-link ${
              location.pathname === '/recipe-list' ? 'active' : ''
            }`}
            onClick={() => setMenuOpen(false)}
          >
            CRUD Recipes
          </Link>
        )}

        {user?.email ? (
          <>
            <span className="nav-link greeting">
              Hello, {user.firstName}
            </span>
            <button className="nav-link logout-btn" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className={`nav-link ${
                location.pathname === '/login' ? 'active' : ''
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className={`nav-link ${
                location.pathname === '/signup' ? 'active' : ''
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Signup
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
