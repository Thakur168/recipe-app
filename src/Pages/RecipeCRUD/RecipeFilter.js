import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import InputField from "../../Components/FormFields/InputField";
import { removeEmptyFields } from "../../Components/Common/utilities";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function RecipeFilter({ getFilterFields }) {
  const { search } = useLocation();
  const searchValue = queryString.parse(search);

  // use hooks
  const { handleSubmit, control, reset } = useForm({
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
    reset({ name: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row mb-3 filter-row p-4">
          <h5>Filters</h5>
          <div className="col-5">
            <InputField
              control={control}
              label="Name"
              name="name"
              placeholder="Name"
              type="text"
              fieldClass="form-control"
            />
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
