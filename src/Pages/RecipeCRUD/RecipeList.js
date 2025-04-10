import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import queryString from "query-string";

import TableData from "./TableData";
import RecipeFilter from "./RecipeFilter";

function RecipeList() {
   // use hooks
   const { search } = useLocation();

   // local variables
   const [data, setData] = useState(
     JSON.parse(localStorage.getItem("data")) || []
   );
   const [filters, setFilters] = useState(queryString.parse(search));
   const [filterData, setFilterData] = useState(null);
 
   const getFilterFields = (_filters) => {
     setFilters(_filters);
     //filterMethod(_filters);
   };
 
   useEffect(() => {
     localStorage.setItem("data", JSON.stringify(data));
   }, [data]);
 
   useEffect(() => {
     //filterMethod(filters);
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
         setData={setData}
         data={data}
       />
 
       <div className="row">
         <div className="col-12">
           <Table striped bordered hover>
             <thead>
               <tr>
                 <th>S.No.</th>
                 <th>Title</th>
                 <th>Description</th>
                 <th>Category</th>
                 <th>Actions</th>
               </tr>
             </thead>
             <tbody>
               {Array.isArray(
                 Object.keys(filters)?.length > 0 ? filterData : data
               ) &&
               (Object.keys(filters)?.length > 0 ? filterData : data)?.length >
                 0 ? (
                 (Object.keys(filters)?.length > 0 ? filterData : data)?.map(
                   (_data, index) => (
                     <TableData
                       key={index}
                       _data={_data}
                       index={index}
                       setData={setData}
                       data={data}
                     />
                   )
                 )
               ) : (
                 <tr>
                   <td colSpan={5} align="center">
                     <p className="m-4">No Recipes yet.</p>
                   </td>
                 </tr>
               )}
             </tbody>
           </Table>
         </div>
       </div>
     </div>
   );
}

export default RecipeList;
