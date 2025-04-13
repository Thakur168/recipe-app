import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./Pages/Layout";
import PageNotFound from "./Pages/PageNotFound";
import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";
import Header from "./Components/Header";
import "./assets/css/style.css";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import { Toaster } from "react-hot-toast";
import Footer from "./Components/Footer";
import { useEffect } from "react";
import { RECIPES } from "./constant";

function App() {
  useEffect(()=> {
    const recipes = [...RECIPES];
    localStorage.setItem("recipes", JSON.stringify(recipes));
  });

  return (
    <Router>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            background: "white",
            color: "black",
          },
          // success: {
          //   iconTheme: {
          //     primary: "#fff",
          //     secondary: "#000",
          //   },
          // },
          // error: {
          //   iconTheme: {
          //     primary: "#FF3B30",
          //     secondary: "#FFFFFF",
          //   },
          // },
        }}
      />
      <Header />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />

        <Route path="/about-us" component={AboutUs} />
        <Route path="/contact-us" component={ContactUs} />

        <Route exact path="/*" component={Layout} />

        {/* If no route match, then user will render to PageNotFound component */}
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
