// Page created by Priya Thakur (8958634)

import {
  BANNERS,
  BANNERSLIDERSETTING,
  CATEGORY,
  RECIPES,
  SLIDERSETTING,
} from "../../constant";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecipeCard from "../../Components/RecipeCard";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

function Home() {
  const [recipes, setRecipes] = useState(
    JSON.parse(localStorage.getItem("recipes")) || RECIPES
  );

  return (
    <main id="main-content">
      <section className="">
        <Slider
          {...{
            ...BANNERSLIDERSETTING,
            dots: true,
            arrows: false,
            autoplay: true,
          }}
        >
          {BANNERS.map((banner, index) => (
            <div key={index} className="slider-item">
              <div
                className="banner-background"
                style={{ backgroundImage: `url(${banner.url})` }}
              >
                <div className="banner-content text-center">
                  <h1>{banner.title}</h1>
                  <p>{banner.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <section className="categories my-5">
        <h2 className="text-center mb-4">Browse by Category</h2>
        <div className="container">
          <div className="row">
            {CATEGORY?.length > 0 &&
              CATEGORY.map((_category, index) => (
                <div className="col-md-2 mb-4" key={index}>
                  <div className="category-card text-center">
                    <Link
                      className="category-section-link"
                      to={`/recipes/${_category?.id}`}
                    >
                      <img
                        src={_category?.url}
                        alt={_category?.categoryName}
                        className="category-img"
                      />
                      <h5 className="category-name">
                        {_category?.categoryName}
                      </h5>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="featured-recipes py-5">
        <div className="container">
          <h2 className="text-center mb-10">Featured Recipes</h2>
          <div className="row">
            <Slider {...{ ...SLIDERSETTING, slidesToShow: 4 }}>
              {recipes?.length > 0 &&
                recipes?.slice(0, 6).map((_recipe, index) => {
                  const category = CATEGORY.find(
                    (cat) => cat.id == _recipe.categoryId
                  );
                  const recipeWithCategory = {
                    ..._recipe,
                    categoryName: category?.categoryName || "Unknown",
                  };
                  return (
                    <RecipeCard
                      index={index}
                      recipe={recipeWithCategory}
                      page="home"
                    />
                  );
                })}
            </Slider>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
