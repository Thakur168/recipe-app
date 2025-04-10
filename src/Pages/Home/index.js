import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Home() {
  return (
    <main id="main-content">
      <section className="banner">
        <div className="banner-content container">
          <h1 className="mt-4">Savor the Flavor!</h1>
          <p>Delicious recipes for every occasion.</p>
        </div>
      </section>

      <section className="categories my-5">
        <h2 className="text-center mb-4">Browse by Category</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-2 mb-4">
              <div className="category-card text-center">
                <Link className="category-section-link" to="#">
                  <img
                    src="assets/images/breakfast.jpg"
                    alt="Breakfast Category"
                    className="category-img"
                  />
                  <h5 className="category-name">Breakfast</h5>
                </Link>
              </div>
            </div>
            <div className="col-md-2 mb-4">
              <div className="category-card text-center">
                <Link className="category-section-link" to="#">
                  <img
                    src="assets/images/lunch.jpg"
                    alt="Lunch Category"
                    className="category-img"
                  />
                  <h5 className="category-name">Lunch</h5>
                </Link>
              </div>
            </div>
            <div className="col-md-2 mb-4">
              <div className="category-card text-center">
                <Link className="category-section-link" to="#">
                  <img
                    src="assets/images/dinner.jpg"
                    alt="Dinner Category"
                    className="category-img"
                  />
                  <h5 className="category-name">Dinner</h5>
                </Link>
              </div>
            </div>
            <div className="col-md-2 mb-4">
              <div className="category-card text-center">
                <Link className="category-section-link" to="#">
                  <img
                    src="assets/images/desert.jpg"
                    alt="Desert Category"
                    className="category-img"
                  />
                  <h5 className="category-name">Deserts</h5>
                </Link>
              </div>
            </div>
            <div className="col-md-2 mb-4">
              <div className="category-card text-center">
                <Link className="category-section-link" to="#">
                  <img
                    src="assets/images/quick_easy.jpg"
                    alt="Quick & Easy Category"
                    className="category-img"
                  />
                  <h5 className="category-name">Quick & Easy</h5>
                </Link>
              </div>
            </div>
            <div className="col-md-2 mb-4">
              <div className="category-card text-center">
                <Link className="category-section-link" to="#">
                  <img
                    src="assets/images/Healthy&Low_Calorie.jpg"
                    alt="Healthy & Low Calorie"
                    className="category-img"
                  />
                  <h5 className="category-name">Healthy & Low-Calorie</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-recipes py-5">
        <div className="container">
          <h2 className="text-center mb-10">Featured Recipes</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              {/* <Link className="recipe-card-link" to={`/recipe/detail/${1}`}> */}
                <div className="recipe-card">
                  <img
                    className="card-img-top img-thumbnail"
                    src="../assets/images/banner_image.jpg"
                    alt="no alt text for now"
                  />
                  <div className="recipe-card-body">
                    <h5 className="card-title">
                      Avocado Toast with Poached Egg
                    </h5>
                    <p>Category: Breakfast</p>
                    <p className="card-text">
                      A simple and nutritious breakfast dish with creamy mashed
                      avocado on toasted whole grain bread, topped with a
                      perfectly poached egg.
                    </p>
                    <Link
                      to="/recipe/detail/1"
                      className="btn btn-primary btn-block"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              {/* </Link> */}
            </div>

            <div className="col-md-4 mb-4">
              {/* <Link to="/recipe/detail/1" className="recipe-card-link"> */}
                <div className="recipe-card">
                  <img
                    className="card-img-top img-thumbnail"
                    src="../../assets/images/Lemon_Meringue_Pie.jpg"
                    alt="no alt text for now"
                  />
                  <div className="recipe-card-body">
                    <h5 className="card-title">Lemon Meringue Pie</h5>
                    <p>Category: Desert</p>
                    <p className="card-text">
                      A tangy lemon filling topped with fluffy meringue, all set
                      in a flaky, buttery crust. A perfect balance of tart and
                      sweet, this pie is a classNameic favorite.
                    </p>
                    <Link
                      to="/recipe/detail/1"
                      className="btn btn-primary btn-block"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              {/* </Link> */}
            </div>

            <div className="col-md-4 mb-4">
              {/* <Link to="/recipe/detail/1" className="recipe-card-link"> */}
                <div className="recipe-card">
                  <img
                    className="card-img-top img-thumbnail"
                    src="../../assets/images/pinach_and_Feta_Omelette.png"
                    alt="no alt text for now"
                  />
                  <div className="recipe-card-body">
                    <h5 className="card-title">Spinach and Feta Omelette</h5>
                    <p>Category: Quick & Easy</p>
                    <p className="card-text">
                      A fluffy omelette filled with spinach and feta cheese.
                      It’s a quick breakfast or dinner option that’s both
                      healthy and satisfying.
                    </p>
                    <Link to="/recipe/detail/1" className="btn btn-primary btn-block">
                      View Details
                    </Link>
                  </div>
                </div>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
