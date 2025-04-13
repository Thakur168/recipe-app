import { Link, useHistory } from "react-router-dom";
import { useUser } from "../../UserContext";

function Header() {
  const { user, setUser } = useUser();
  const history = useHistory();

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
              <Link className="nav-link active" to="/">
                Home NEW
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/recipes">
                Recipes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">
                Contact Us
              </Link>
            </li>
           
            {user && user.email && (
               <li className="nav-item">
               <Link className="nav-link" to="/recipe-list">
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
                  <Link className="nav-link loginText" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link signupText" to="/signup">
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
