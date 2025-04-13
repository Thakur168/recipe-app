import { Link } from "react-router-dom/cjs/react-router-dom";

function Footer() {
  return (
    <footer>
    <div className="container">
        <section className="footer_content">
            <div className="row">
                <div className="content col text-center">
                    <h3>The Recipe Vault</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="recipes">Recipes</Link></li>
                        <li><Link to="about-us">About Us</Link></li>
                    </ul>
                </div>
                <div className="content col text-center">
                    <h3>Need Help</h3>
                    <ul>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="content col text-center">
                    <h3>Members Name</h3>
                    <ul>
                        <li><p>Priya Thakur (8958634)</p></li>
                        <li><p>Hari Karnan (8925421)</p></li>
                        <li><p>Vijay Prakash (8962818)</p></li>
                        <li><p>Venkat Reddy (8982817)</p></li>
                    </ul>
                </div>
            </div>
        </section>
        <section className="footer_bottom text-center">
            <i className="fa-brands fa-facebook-f mx-4"></i>
            <i className="fa-brands fa-instagram mx-4"></i>
            <i className="fa-brands fa-twitter mx-4"></i>
            <i className="fa-brands fa-linkedin-in mx-4"></i>
            <p>&copy; <span id="date"></span> 2025 The Recipe Vault. All Rights Reserved</p>
        </section>
    </div>
</footer>

  );
}

export default Footer;
