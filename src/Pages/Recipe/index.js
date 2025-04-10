// Page created by Priya Thakur (8958634)

import { useState, useEffect } from "react";
import RecipeCard from "../../Components/RecipeCard";
import { RECIPES } from "../../constant";
import InfiniteScroll from "react-infinite-scroll-component";

function Recipe() {
  const [displayedRecipes, setDisplayedRecipes] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [filterName, setFilterName] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const recipesPerPage = 5;
  const [filteredRecipes, setFilteredRecipes] = useState(RECIPES);

  const applyFilters = () => {
    let result = RECIPES;

    if (filterName) {
      result = result.filter((recipe) =>
        recipe.recipeName.toLowerCase().includes(filterName.toLowerCase())
      );
    }

    if (filterCategory) {
      result = result.filter((recipe) => recipe.category === filterCategory);
    }

    setFilteredRecipes(result);
  };

  const fetchMoreRecipes = () => {
    if (loading || !hasMore) return;

    setLoading(true);

    setTimeout(() => {
      const nextRecipes = filteredRecipes.slice(
        displayedRecipes.length,
        displayedRecipes.length + recipesPerPage
      );

      setDisplayedRecipes((prev) => [...prev, ...nextRecipes]);
      setLoading(false);

      if (
        displayedRecipes.length + nextRecipes.length >=
        filteredRecipes.length
      ) {
        setHasMore(false);
      }
    }, 1000);
  };

  const applyFiltersOnClick = (e) => {
    e.preventDefault();
    applyFilters();
    setDisplayedRecipes(filteredRecipes.slice(0, recipesPerPage));
    setHasMore(true);
  };

  const resetFilters = () => {
    setFilterName("");
    setFilterCategory("");
    setDisplayedRecipes(RECIPES.slice(0, recipesPerPage));
    setFilteredRecipes(RECIPES);
    setHasMore(true);
  };

  useEffect(() => {
    setDisplayedRecipes(filteredRecipes.slice(0, recipesPerPage));
    setHasMore(true);
  }, [filteredRecipes]);

  return (
    <main id="recipe-main">
      <div className="container">
        <section className="filter-form mb-20">
          <form className="row gx-3 gy-2" onSubmit={applyFiltersOnClick}>
            <div className="form-group col-md-4">
              <label htmlFor="name" className="form-label">
                Recipe Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                value={filterName}
                onChange={(e) => setFilterName(e.target.value)}
                placeholder="Search by name"
              />
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="category" className="form-label">
                Category:
              </label>
              <select
                name="category"
                id="category"
                className="form-control"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Desert">Desert</option>
                <option value="Quick & Easy">Quick & Easy</option>
                <option value="Healthy & Low-Calorie">
                  Healthy & Low-Calorie
                </option>
              </select>
            </div>

            <div className="form-group col-12 text-center mt-3 text-end">
              <button
                type="button"
                onClick={resetFilters}
                className="btn btn-lg px-4 cancel-filter"
              >
                Cancel Filters
              </button>
              <button type="submit" className="btn btn-lg px-4 apply-filter">
                Filter
              </button>
            </div>
          </form>
        </section>

        <section className="recipes our-recipes">
          <h2 className="text-center mb-10">Our Recipes</h2>

          <InfiniteScroll
            dataLength={displayedRecipes.length}
            next={fetchMoreRecipes}
            hasMore={hasMore}
            loader={<p className="text-center">Loading more recipes...</p>}
            endMessage={
              <p className="noMoreProducts text-center">
                No more recipes to load.
              </p>
            }
          >
            <div className="row">
              {displayedRecipes.length > 0 &&
                displayedRecipes.map((_recipe, index) => (
                  <RecipeCard key={index} index={index} recipe={_recipe} />
                ))}
            </div>
          </InfiniteScroll>
        </section>
      </div>
    </main>
  );
}

export default Recipe;
