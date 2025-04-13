// Page created by Priya Thakur (8958634)

import { useState, useEffect } from "react";
import RecipeCard from "../../Components/RecipeCard";
import { CATEGORY, RECIPES} from "../../constant";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom/cjs/react-router-dom";

function Recipe() {
  const [allrecipes, setAllRecipes] = useState(JSON.parse(localStorage.getItem("recipes")) || RECIPES)
  const [displayedRecipes, setDisplayedRecipes] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filterName, setFilterName] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const { categoryId } = useParams();
  const recipesPerPage = 5;
  const [filteredRecipes, setFilteredRecipes] = useState(allrecipes);

  const applyFilters = (filterName, categoryId) => {
    let result = [...allrecipes];

    if (filterName) {
      result = result.filter((recipe) =>
        recipe.recipeName.toLowerCase().includes(filterName.toLowerCase())
      );
    }
   
    if (categoryId) {
      result = result.filter((recipe) => recipe.categoryId == categoryId);
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
    if (e) e.preventDefault();
    applyFilters(filterName, filterCategory);
    setDisplayedRecipes(filteredRecipes.slice(0, recipesPerPage));
    setHasMore(true);
  };

  const resetFilters = () => {
    setFilterName("");
    setFilterCategory("");
    setDisplayedRecipes(allrecipes.slice(0, recipesPerPage));
    setFilteredRecipes(allrecipes);
    setHasMore(true);
  };

  useEffect(() => {
    setDisplayedRecipes(filteredRecipes.slice(0, recipesPerPage));
    setHasMore(true);
  }, [filteredRecipes]);

  useEffect(() => {
    if (categoryId) {
      setFilterCategory(categoryId);
      applyFilters("", categoryId);
      setDisplayedRecipes(filteredRecipes.slice(0, recipesPerPage));
      setHasMore(true);
    }
  }, [categoryId]);

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
                {CATEGORY &&
                  CATEGORY?.map((_category, index) => (
                    <option key={index} value={_category?.id}>
                      {_category?.categoryName}
                    </option>
                  ))}
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
                displayedRecipes.map((_recipe, index) => {
                  const category = CATEGORY.find(cat => cat.id == _recipe.categoryId);
                  const recipeWithCategory = {
                    ..._recipe,
                    categoryName: category?.categoryName || "Unknown",
                  };
              
                  return (
                    <RecipeCard key={index} index={index} recipe={recipeWithCategory} />
                  );
                })}
            </div>
          </InfiniteScroll>
        </section>
      </div>
    </main>
  );
}

export default Recipe;
