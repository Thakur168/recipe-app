import { Link } from "react-router-dom/cjs/react-router-dom";
import placeholder from "../../assets/images/placeholder_image.png";

function RecipeCard({ recipe, index, page }) {
  return (
    <div className={page == "home" ? "" : "col-md-4 mb-4"} key={index}>
      {/* <Link
      className="recipe-card-link"
      to={`/recipe/detail/${1}`}
    > */}
      <div className="recipe-card">
        <img
          className="card-img-top img-thumbnail"
          src={recipe?.url ? recipe?.url : placeholder}
          alt="no alt text for now"
        />
        <div className="recipe-card-body">
          <h5 className="card-title">{recipe?.recipeName}</h5>
          <p>Category: {recipe?.categoryName}</p>
          <p className="card-text">{recipe?.description}</p>
          <Link
            to={`/recipe/detail/${recipe?.id}`}
            className="btn btn-primary btn-block"
          >
            View Details
          </Link>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
}

export default RecipeCard;
