import { Route, Switch } from "react-router-dom";

import Recipe from "./Recipe";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import RecipeDetail from "./RecipeDetail";
import AddEditRecipe from "./RecipeCRUD/AddEditRecipe";
import RecipeList from "./RecipeCRUD/RecipeList";

function Layout() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/recipes" component={Recipe} />
      <Route path="/recipe/detail/:id" component={RecipeDetail} />

      {/* Optional recipe routes if you use them later */}
      <Route path="/recipe-list" component={RecipeList} />
      <Route path="/recipe/add" component={AddEditRecipe} />
      <Route path="/recipe/edit/:id" component={AddEditRecipe} />

      <Route component={PageNotFound} />
    </Switch>
  );
}

export default Layout;
