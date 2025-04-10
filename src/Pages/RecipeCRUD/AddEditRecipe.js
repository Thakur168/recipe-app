import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { Button } from "react-bootstrap";
import InputField from "../../Components/FormFields/InputField";
import TextAreaField from "../../Components/FormFields/TextAreaField";
import { useHistory } from "react-router-dom/cjs/react-router-dom";


function AddEditRecipe() {
  // use hooks
  const {
    control,
    handleSubmit,
    setValue,
  } = useForm();

  const history = useHistory();
  const { id } = useParams();
  
  const cancel = () => {
    history.push('/recipe-list');
};

  // on form submissions
  const onSubmit = (formData) => {
    let data =
      localStorage.getItem("data") != undefined ||
        localStorage.getItem("data") != null
        ? JSON.parse(localStorage.getItem("data"))
        : [];

    if (id) {
      const foundIndex = data?.findIndex((_data) => _data?.id == id);
      if (foundIndex > -1) {
        data[foundIndex] = { id, ...formData };
        localStorage.setItem("data", JSON.stringify(data));
      }
    } else {
      const id = uuidv4();
      data.unshift({ id, ...formData });
      localStorage.setItem("data", JSON.stringify(data));
    }
    history.push("/recipe-list");
  };

  const setValues = (id) => {
    const data = JSON.parse(localStorage.getItem("data"));
    const foundData = data?.find((_data) => _data?.id == id);
    if (Object.keys(foundData)?.length > 0) {
      setValue("name", foundData?.name);
    }
  };

  useEffect(() => {
    if (id) setValues(id);
  }, [id]);

  return (
    <div className="login-container">
      <div className="container">
        <div className="col-md-8 m-md-auto loginDiv">
          <h2 className="pageName text-center">Add Recipe</h2>
          <form name="filter" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="mb-3">
                <InputField
                  control={control}
                  label="Recipe Name"
                  name="name"
                  type="text"
                  fieldClass="form-control"
                  placeholder="Enter Recipe Name"
                  rules={{
                    required: {
                      value: true,
                      message: "Recipe Name is required",
                    },
                  }}
                />
              </div>

              {/* <div className="mb-3">
                <InputField
                  control={control}
                  label="Sub Title"
                  name="subTitle"
                  type="text"
                  placeholder="Sub Title"
                  minValue={0}
                  fieldClass="form-control"
                  rules={{
                    required: {
                      value: true,
                      message: "Give a sub title",
                    },
                  }}
                />
              </div> */}

              <div className="col-9 mb-3">
                <InputField
                  control={control}
                  label="Recipe Image"
                  name="recipeImage"
                  type="file"
                  placeholder="Upload an image here"
                  minValue={0}
                  fieldClass="form-control"
                  rules={{
                    required: {
                      value: true,
                      message: "Provide an image for your recipe",
                    },
                  }}
                />
              </div>

              <div className="mb-3">
                <TextAreaField
                  control={control}
                  label="Recipe description"
                  name="description"
                  placeholder="Recipe description"
                  type="text"
                  rows="10"
                  fieldClass="form-control"
                  rules={{
                    required: {
                      value: true,
                      message: "Recipe description is required",
                    },
                  }}
                />
              </div>

              <div className="row">
                <div className="filter-result-block mb-3 col-3">
                  <Button className="cancelBtn" onClick={cancel}>
                    Cancel
                  </Button>{" "}
                </div>
                <div className="filter-result-block mb-3 col-3">
                  <Button type="submit" className="loginBtn">
                    Add
                  </Button>{" "}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddEditRecipe;
