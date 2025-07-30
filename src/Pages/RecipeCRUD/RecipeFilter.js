// Page created by Vijay Prakash (8962818)

import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { removeEmptyFields } from "../../Components/Common/utilities";
import { CATEGORY } from "../../constant";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

function RecipeFilter({ getFilterFields }) {
  const { search } = useLocation();
  const searchValue = queryString.parse(search);

  // use hooks
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { ...searchValue },
  });

  const history = useHistory();

  const onSubmit = (data) => {
    const values = removeEmptyFields(data);
    const queryParams = new URLSearchParams(values);
    history.push({
      search: queryParams.toString(),
    });
    getFilterFields(values);
  };

  const resetFilter = () => {
    history.push({
      search: "",
    });
    getFilterFields({});
    reset({ name: "", category: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row mb-3 filter-row p-4">
          <h5>Filters</h5>
          <div className="col-5">
            <div className="form-group">
              <label className="mb-1">Recipe Name</label>
              <div className="textfield-block">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Recipe name"
                  {...register("recipeName", {
                    required: false,
                  })}
                />
              </div>
            </div>
          </div>

          <div className="col-5">
            <label htmlFor="category" className="form-label">
              Category:
            </label>
            <select
              name="category"
              id="category"
              className="form-control"
              {...register("categoryId", {
                required: false,
              })}
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

          <div className="col-2 text-end">
            <div className="btn-wrpr">
              <div className="filter-result-block form-group">
                <Button type="submit" className="loginBtn">
                  Apply
                </Button>{" "}
              </div>
              <div className="filter-result-block form-group">
                <Button className="cancelBtn" onClick={resetFilter}>
                  Reset
                </Button>{" "}
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default RecipeFilter;
