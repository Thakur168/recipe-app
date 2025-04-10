import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Recipe() {
  return (
    <main id="recipe-main">
      <div className="container">
        <section className="filter-form mb-20">
          <form className="row gx-3 gy-2">
            <div className="form-group col-md-4">
              <label htmlFor="name" className="form-label">
                Recipe Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                value="qwewq"
                placeholder="Search by name"
              />
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="category" className="form-label">
                Category:
              </label>
              <select name="category" id="category" className="form-control">
                <option value="0">All Categories</option>
                <option value="">Option 1</option>
              </select>
            </div>

            <div className="form-group col-12 text-center mt-3 text-end">
              <a href="recipes.php" className="btn btn-lg px-4 cancel-filter">
                Cancel Filters
              </a>
              <button type="submit" className="btn btn-lg px-4 apply-filter">
                Apply Filters
              </button>
            </div>
          </form>
        </section>

        <section className="recipes our-recipes">
          <h2 className="text-center mb-10">Our Recipes</h2>

          <div className="row">
            <div className="col-md-4 mb-4">
              {/* <a
                href="#"
                className="recipe-card-link"
              > */}
                <div className="recipe-card">
                  <img className="card-img-top img-thumbnail" src="../assets/images/desert.jpg" alt="wedwr" />
                  <div className="recipe-card-body">
                    <h5 className="card-title">wewr</h5>
                    <p className="card-text">wewer</p>
                    <Link
                      to="/recipe/detail/1"
                      id="prod-detail"
                      className="btn btn-primary btn-block"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              {/* </a> */}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Recipe;
