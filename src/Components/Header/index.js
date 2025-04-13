import { Link, useHistory } from "react-router-dom";
import { useUser } from "../../UserContext";
import { useLocation } from "react-router-dom/cjs/react-router-dom";

function Header() {
  const { user, setUser } = useUser();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    setUser(null);
    history.push("/");
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand brandLogo" to="/">
          The Recipe Vault
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/recipes" ? "active" : ""
                }`}
                to="/recipes"
              >
                Recipes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about-us" ? "active" : ""
                }`}
                to="/about-us"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/contact-us" ? "active" : ""
                }`}
                to="/contact-us"
              >
                Contact Us
              </Link>
            </li>

            {user && user.email && (
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/recipe-list" ? "active" : ""
                  }`}
                  to="/recipe-list"
                >
                  CRUD Recipes
                </Link>
              </li>
            )}
          </ul>
          <ul className="navbar-nav ms-auto">
            {user && user.email ? (
              <>
                <li className="nav-item">
                  <span className="nav-link">Hello, {user.firstName}</span>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    className={`nav-link loginText ${
                      location.pathname === "/login" ? "active" : ""
                    }`}
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link signupText ${
                      location.pathname === "/signup" ? "active" : ""
                    }`}
                    to="/signup"
                  >
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
