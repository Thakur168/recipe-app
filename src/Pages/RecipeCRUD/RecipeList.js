// Page created by Venkat Reddy (8982817)

import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import queryString from "query-string";
import ReactPaginate from "react-paginate";

import TableData from "./TableData";
import RecipeFilter from "./RecipeFilter";
import { RECIPES } from "../../constant";

function RecipeList() {
  const { search } = useLocation();

  const [recipes, setRecipes] = useState(
    JSON.parse(localStorage.getItem("recipes")) || RECIPES
  );
  const [filters, setFilters] = useState(queryString.parse(search));
  const [filterRecipe, setFilterRecipe] = useState(null);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const getFilterFields = (_filters) => {
    setFilters(_filters);
    setCurrentPage(0);
  };

  // Determine which data to use
  const filteredData =
    Object.keys(filters)?.length > 0 ? filterRecipe : recipes;
  const offset = currentPage * itemsPerPage;
  const currentItems = filteredData?.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil((filteredData?.length || 0) / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    let result = [...recipes];
    if (filters?.recipeName) {
      result = recipes.filter((recipe) =>
        recipe.recipeName
          .toLowerCase()
          .includes(filters?.recipeName.toLowerCase())
      );
    }

    if (filters?.categoryId) {
      result = result.filter(
        (recipe) => recipe.categoryId == filters?.categoryId
      );
    }

    setFilterRecipe(result);
  }, [filters]);

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-6">
          <h3 className="heading">Recipes List</h3>
        </div>

        <div className="col-6 text-end">
          <Link
            className="btn btn-primary ml-auto mr-0 my-3 px-5 apply-filter"
            to="/recipe/add"
          >
            Add
          </Link>
        </div>
      </div>

      <RecipeFilter
        getFilterFields={getFilterFields}
        setRecipe={setRecipes}
        data={recipes}
      />

      <div className="row">
        <div className="col-12">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(currentItems) && currentItems.length > 0 ? (
                currentItems.map((_recipe, index) => (
                  <TableData
                    key={_recipe?.id || index}
                    _recipe={_recipe}
                    index={offset + index}
                    setRecipe={setRecipes}
                    recipes={recipes}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan={5} align="center">
                    <p className="m-4">No Recipes yet.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>

          {/* Pagination */}
          {pageCount > 1 && (
            <div className="d-flex justify-content-center my-3">
              <ReactPaginate
                previousLabel={"←"}
                nextLabel={"→"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={1}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                activeClassName={"active"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecipeList;
