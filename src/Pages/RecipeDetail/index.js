function RecipeDetail() {
  return (
    <main className="container my-5 prod_detail">
      <div className="row">
        <div className="col-md-5">
          <div className="text-center">
            <img
              src="../../assets/images/pinach_and_Feta_Omelette.png"
              alt="pinach_and_Feta_Omelette"
              className="img-fluid rounded shadow-sm"
              //   style="max-width:100%;"
            />
          </div>
        </div>

        <div className="col-md-7">
          <h1 className="mb-3" id="recipe-name">
            Spinach and Feta Omelette
          </h1>
          <p className="mb-4">
            {" "}
            A fluffy omelette filled with spinach and feta cheese. It’s a quick
            breakfast or dinner option that’s both healthy and satisfying.
          </p>
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
            <h4>recipe Description</h4>
            <p> A fluffy omelette filled with spinach and feta cheese.
                      It’s a quick breakfast or dinner option that’s both
                      healthy and satisfying.</p>
          </div>

          <div
            className="tab-pane fade"
            id="info"
            role="tabpanel"
            aria-labelledby="info-tab"
          >
            <h4>recipe Information</h4>
            <ul className="list-unstyled">
              <li>
                <strong>Category:</strong>
                category here
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default RecipeDetail;
