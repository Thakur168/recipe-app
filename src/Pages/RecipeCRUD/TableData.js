import { useState } from "react";
import ConfirmationModal from "../../Components/Common/ConfirmationModal";
import { CATEGORY } from "../../constant";
import placeholder from "../../assets/images/placeholder_image.png";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

function TableData({ _recipe, index, setRecipe, recipes }) {
  const [isDelete, setIsDelete] = useState(false);
  const [id, setId] = useState(null);
  const category = CATEGORY.find(
    (category) => category?.id == _recipe?.categoryId
  );
  const history = useHistory();

  const onHideModel = () => {
    const afterDelete = recipes?.filter((recp) => recp?.id != id);
    localStorage.setItem("recipes", JSON.stringify(afterDelete));
    setIsDelete(false);
  };

  const onEditClick = (id) => {
    history.push(`/recipe/edit/${id}`);
  };
  return (
    <>
      <tr>
        <td>{index + 1} </td>
        <td>
          <img
            className="img-fluid"
            src={_recipe?.url ? _recipe?.url : placeholder}
          />
        </td>
        <td>{_recipe?.recipeName}</td>
        <td>{_recipe?.description}</td>
        <td>{category?.categoryName}</td>
        <td className="table-action">
          <div className="table-btn-block">
            <Button
              className="btn orange-btn loginBtn"
              onClick={() => onEditClick(_recipe?.id)}
            >
              Edit
            </Button>
          </div>
          <div className="table-btn-block">
            <Button
              className="btn cancelBtn mt-1"
              onClick={() => {
                setId(_recipe?.id);
                setIsDelete(true);
              }}
            >
              Delete
            </Button>
          </div>
        </td>
      </tr>

      {isDelete && id !== null && (
        <ConfirmationModal
          show={isDelete}
          onHide={() => onHideModel()}
          setData={setRecipe}
          data={recipes}
          id={id}
        />
      )}
    </>
  );
}

export default TableData;
