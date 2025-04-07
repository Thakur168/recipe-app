import { Route, Switch } from "react-router-dom";

import Recipe from "./Recipe";
import Home from "./Home";
import PageNotFound from "./PageNotFound";

function Layout() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/recipes" component={Recipe} />

      {/* Optional blog routes if you use them later */}
      {/* <Route path="/blog/add" component={AddEditBlog} />
      <Route path="/blog/edit/:id" component={AddEditBlog} /> */}

      <Route component={PageNotFound} />
    </Switch>
  );
}

export default Layout;
