// Page created by Priya Thakur (8958634)

import { useParams } from "react-router-dom";
import { RECIPES } from "../../constant";

function RecipeDetail() {
  const { id } = useParams();
  const recipe = RECIPES.find((r) => r.id == parseInt(id));

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <main className="container my-5 prod_detail">
      <div className="row">
        <div className="col-md-5">
          <div className="text-center">
            <img
              src={recipe.url}
              alt={recipe.recipeName}
              className="img-fluid rounded shadow-sm recipe-img"
            />
          </div>
        </div>

        <div className="col-md-7">
          <h1 className="mb-3" id="recipe-name">
            {recipe.recipeName}
          </h1>
          <p className="mb-4">{recipe.description}</p>
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
            <h4>Recipe Description</h4>
            <p>{recipe.description}</p>
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
                <strong>Category:</strong> {recipe.category}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default RecipeDetail;
