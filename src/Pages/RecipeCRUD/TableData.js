import { useState } from "react";
import { Link } from "react-router-dom";
import ConfirmationModal from "../../Components/Common/ConfirmationModal";

function TableData({ _data, index, setData, data }){
    //   local variables
    const [isDelete, setIsDelete] = useState(false);
    const [id, setId] = useState(null);

    return (
        <>
            <tr>
                <td>{index + 1} </td>
                <td>{_data?.name}</td>
                <td>{_data?.description}</td>
                <td>{_data?.category}</td>
                <td className="table-action">
                    <div className="table-btn-block">
                        <Link
                            className="btn orange-btn"
                            to={`/recipe/edit/${_data?.id}`}
                        >
                            Edit
                        </Link>
                    </div>
                    <div className="table-btn-block">
                        <button
                            className="btn delete-btn"
                            onClick={() => {
                                setId(_data?.id);
                                setIsDelete(true);
                            }}
                        >
                            Delete
                        </button>
                    </div>
                </td>
            </tr>

            {isDelete && id !== null && (
                <ConfirmationModal
                    show={isDelete}
                    onHide={() => setIsDelete(false)}
                    setData={setData}
                    data={data}
                    id={id}
                />
            )}
        </>
    );
}

export default TableData;
