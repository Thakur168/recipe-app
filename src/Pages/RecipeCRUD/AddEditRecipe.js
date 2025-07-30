// Page created by Vijay Prakash (8962818)

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { CATEGORY } from "../../constant";

function AddEditRecipe() {
  const {
    control,
    handleSubmit,
    setValue,
    register,
    formState: { errors },
  } = useForm();

  const history = useHistory();
  const { id } = useParams();

  const cancel = () => {
    history.push("/recipe-list");
  };

  // Handle form submission
  const onSubmit = (formData) => {
    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    if (id) {
      const index = recipes.findIndex((recipe) => recipe.id === id);
      if (index > -1) {
        recipes[index] = { id, ...formData };
        localStorage.setItem("recipes", JSON.stringify(recipes));
      }
    } else {
      const newId = uuidv4();
      recipes.unshift({ id: newId, ...formData });
      localStorage.setItem("recipes", JSON.stringify(recipes));
      
    }

    history.push("/recipe-list");
  };

  // Prefill form values for editing
  const setValues = (id) => {
    const recipes = JSON.parse(localStorage.getItem("recipes"));

    const recipe = recipes.find((r) => r.id == id);
   
    if (recipe) {
      setValue("recipeName", recipe.recipeName);
      setValue("description", recipe.description);
      setValue("categoryId", recipe.categoryId);
      setValue("ingredients", [recipe.ingredients].join("\n"));
      setValue("prepTime", recipe.prepTime);
      setValue("cookTime", recipe.cookTime);
      setValue("totalTime", recipe.totalTime);
      setValue("servings", recipe.servings);
      setValue("difficulty", recipe.difficulty);
      setValue("nutrition", recipe.nutrition);
      setValue("tags", [recipe.tags].join(", "));
      setValue("author", recipe.author);
      setValue("tips", [recipe.tips].join("\n"));
      setValue("instructions", [recipe.instructions].join("\n"));
    }
  };

  useEffect(() => {
    if (id) setValues(id);
  }, [id]);

  return (
    <div className="login-container">
      <div className="container">
        <div className="col-md-8 m-md-auto loginDiv recipeAddEdit">
          <h2 className="pageName text-center">
            {id ? "Edit Recipe" : "Add Recipe"}
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="mb-3">
                <label>Recipe Name</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Recipe Name"
                  {...register("recipeName", {
                    required: "Recipe name is required",
                  })}
                />
                {errors.recipeName && (
                  <span className="text-danger">
                    {errors.recipeName.message}
                  </span>
                )}
              </div>

              <div className="mb-3">
                <label className="mb-1">Description</label>
                <div className="textfield-block">
                  <textarea
                    className="form-control"
                    type="text"
                    placeholder="Description"
                    {...register("description", {
                      required: "Description is required",
                    })}
                  ></textarea>
                </div>
                {errors.description && (
                  <span className="text-danger">
                    {errors.description.message}
                  </span>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Category:
                </label>
                <select
                  className="form-control"
                  {...register("categoryId", {
                    required: "Category is required",
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
                {errors.categoryId && (
                  <span className="text-danger">
                    {errors.categoryId.message}
                  </span>
                )}
              </div>

              <div className="mb-3">
                <label>Ingredients</label>
                <textarea
                  className="form-control"
                  type="text"
                  placeholder="Ingredients (one per line)"
                  {...register("ingredients", {
                    required: "ingredients are required",
                  })}
                  rows="5"
                ></textarea>
                {errors.ingredients && (
                  <span className="text-danger">
                    {errors.ingredients.message}
                  </span>
                )}
              </div>

              <div className="mb-3">
                <label>Preparation Time</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Preparation Time"
                  {...register("prepTime", {
                    required: "Preparation Time is required",
                  })}
                />
                {errors.prepTime && (
                  <span className="text-danger">{errors.prepTime.message}</span>
                )}
              </div>

              <div className="mb-3">
                <label>Cooking Time</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Cooking Time"
                  {...register("cookTime", {
                    required: "Cooking Time is required",
                  })}
                />
                {errors.cookTime && (
                  <span className="text-danger">{errors.cookTime.message}</span>
                )}
              </div>

              <div className="mb-3">
                <label>Total Time</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Total Time"
                  {...register("totalTime", {
                    required: "Total Time is required",
                  })}
                />
                {errors.totalTime && (
                  <span className="text-danger">
                    {errors.totalTime.message}
                  </span>
                )}
              </div>

              <div className="mb-3">
                <label>Servings</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Number of Servings"
                  {...register("servings", {
                    required: "Servings are required",
                  })}
                />
                {errors.servings && (
                  <span className="text-danger">{errors.servings.message}</span>
                )}
              </div>

              <div className="mb-3">
                <label>Difficulty</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Difficulty Level"
                  {...register("difficulty", {
                    required: "Difficulty Level are required",
                  })}
                />
                {errors.difficulty && (
                  <span className="text-danger">
                    {errors.difficulty.message}
                  </span>
                )}
              </div>

              <div className="mb-3">
                <label>Tags</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Tags (comma separated)"
                  {...register("tags", {
                    required: "Tags are required",
                  })}
                />
                {errors.tags && (
                  <span className="text-danger">{errors.tags.message}</span>
                )}
              </div>

              <div className="mb-3">
                <label>Author</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Author's Name"
                  {...register("author", {
                    required: "Author is required",
                  })}
                />
                {errors.author && (
                  <span className="text-danger">{errors.author.message}</span>
                )}
              </div>

              <div className="mb-3">
                <label>Tips</label>
                <textarea
                  className="form-control"
                  type="text"
                  placeholder="Tips (one per line)"
                  {...register("tips", {
                    required: false,
                  })}
                  rows="5"
                ></textarea>
                {errors.tips && (
                  <span className="text-danger">{errors.tips.message}</span>
                )}
              </div>

              <div className="mb-3">
                <label>Instructions</label>
                <textarea
                  className="form-control"
                  type="text"
                  placeholder="Instructions (one per line)"
                  {...register("instructions", {
                    required: "Instructions are required",
                  })}
                  rows="5"
                ></textarea>
                {errors.instructions && (
                  <span className="text-danger">
                    {errors.instructions.message}
                  </span>
                )}
              </div>

              <div className="row">
                <div className="filter-result-block mb-3 col-3">
                  <Button className="cancelBtn" onClick={cancel}>
                    Cancel
                  </Button>
                </div>
                <div className="filter-result-block mb-3 col-3">
                  <Button type="submit" className="loginBtn">
                    {id ? "Update Recipe" : "Add Recipe"}
                  </Button>
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
