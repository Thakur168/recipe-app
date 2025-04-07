import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./Pages/Layout";
import PageNotFound from "./Pages/PageNotFound";
import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";
import Header from "./Components/Header";
import Footer from "./Components/Footer.js";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Layout} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />

         {/* If no route match, then user will render to PageNotFound component */}
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
