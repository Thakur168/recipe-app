import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import PageNotFound from "./Pages/PageNotFound";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import './assets/css/style.css';

function AppWrapper() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  const hideHeaderRoutes = ["/", "/signup"];

  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && <Header onLogout={handleLogout} />}

      <Switch>
        <Route exact path="/">
          {isLoggedIn ? <Redirect to="/home" /> : <Login />}
        </Route>

        <Route path="/signup">
          {isLoggedIn ? <Redirect to="/home" /> : <SignUp />}
        </Route>

        <Route path="/home" component={Home} />

        {isLoggedIn ? <Route path="/about-us" component={AboutUs} /> : <Redirect to="/" />}
        {isLoggedIn ? <Route path="/contact-us" component={ContactUs} /> : <Redirect to="/" />}

        <Route component={PageNotFound} />
      </Switch>

      {isLoggedIn && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
