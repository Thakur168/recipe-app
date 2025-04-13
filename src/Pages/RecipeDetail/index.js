import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import placeholder from "../../assets/images/placeholder_image.png";
import { CATEGORY } from "../../constant";

function RecipeDetail() {
  const [recipes, setRecipes] = useState(
    JSON.parse(localStorage.getItem("recipes"))
  );
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (recipes) {
      let recipe = recipes.find((r) => r.id == id);
      if (recipe) {
        if (!Array.isArray(recipe.instructions)) {
          recipe.instructions = recipe.instructions.split("\n").filter(Boolean);
        }

        if (!Array.isArray(recipe.ingredients)) {
          recipe.ingredients = recipe.ingredients.split("\n").filter(Boolean);
        }

        if (!Array.isArray(recipe.tips)) {
          recipe.tips = recipe.tips
            .split(/\n|,/)
            .map((t) => t.trim())
            .filter(Boolean);
        }

        const category = CATEGORY.find(
          (category) => category?.id == recipe?.categoryId
        );
        recipe.categoryName = category?.categoryName;

        setRecipe(recipe);
      }
    }
  }, [id, recipes]);

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <main className="container my-5 prod_detail">
      <div className="row">
        <div className="col-md-5">
          <div className="text-center">
            <img
              src={recipe.url ? recipe.url : placeholder}
              alt={recipe.recipeName}
              className="img-fluid rounded shadow-sm recipe-img"
            />
          </div>
        </div>

        <div className="col-md-7">
          <h1 className="mb-3" id="recipe-name">
            {recipe.recipeName} ({recipe.categoryName})
          </h1>

          <p className="mb-4">{recipe.description}</p>

          <h4>Recipe Time & Serving</h4>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th scope="row">Servings</th>
                <td>{recipe.servings}</td>
              </tr>
              <tr>
                <th scope="row">Prep Time</th>
                <td>{recipe.prepTime}</td>
              </tr>
              <tr>
                <th scope="row">Cook Time</th>
                <td>{recipe.cookTime}</td>
              </tr>
              <tr>
                <th scope="row">Total Time</th>
                <td>{recipe.totalTime}</td>
              </tr>
            </tbody>
          </table>

          <h4>Cooking Instructions</h4>
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-5">
        <ul className="nav nav-tabs" id="recipe-tabs" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active font-weight-bold"
              id="details-tab"
              data-toggle="tab"
              href="#details"
              role="tab"
              aria-controls="details"
              aria-selected="true"
            >
              Details
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link font-weight-bold"
              id="info-tab"
              data-toggle="tab"
              href="#info"
              role="tab"
              aria-controls="info"
              aria-selected="false"
            >
              More Information
            </a>
          </li>
        </ul>
        <div
          className="tab-content p-3 border border-top-0 rounded-bottom"
          id="recipe-tabs-content"
        >
          <div
            className="tab-pane fade show active"
            id="details"
            role="tabpanel"
            aria-labelledby="details-tab"
          >
            <h4>Ingredients</h4>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div
            className="tab-pane fade"
            id="info"
            role="tabpanel"
            aria-labelledby="info-tab"
          >
            <h4>Recipe Information</h4>
            <ul className="list-unstyled">
              <li>
                <strong>Difficulty:</strong> {recipe.difficulty}
              </li>
              <li>
                <strong>Author:</strong> {recipe.author}
              </li>
            </ul>

            <h4>Nutrition</h4>
            <ul className="list-unstyled">
              <li>
                <strong>Calories:</strong> {recipe?.nutrition?.calories || "---"}
              </li>
              <li>
                <strong>Fat:</strong> {recipe?.nutrition?.fat || "---"}
              </li>
              <li>
                <strong>Carbs:</strong> {recipe?.nutrition?.carbs || "---"}
              </li>
              <li>
                <strong>Protein:</strong> {recipe?.nutrition?.protein || "---"}
              </li>
            </ul>

            <h4>Tips</h4>
            <ul>
              {recipe.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default RecipeDetail;
