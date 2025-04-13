import { Route, Switch } from "react-router-dom";

import Recipe from "./Recipe";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import RecipeDetail from "./RecipeDetail";
import AddEditRecipe from "./RecipeCRUD/AddEditRecipe";
import RecipeList from "./RecipeCRUD/RecipeList";
import ProtectedRoute from "../Components/ProtectedRoute";

function Layout() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/recipes/:categoryId?" component={Recipe} />
      <Route path="/recipes" component={Recipe} />
      <Route path="/recipe/detail/:id" component={RecipeDetail} />

      {/* protected routes. Only for loggedin users */}
      <ProtectedRoute path="/recipe-list" component={RecipeList} />
      <ProtectedRoute path="/recipe/add" component={AddEditRecipe} />
      <ProtectedRoute path="/recipe/edit/:id" component={AddEditRecipe} />

      <Route component={PageNotFound} />
    </Switch>
  );
}

export default Layout;
