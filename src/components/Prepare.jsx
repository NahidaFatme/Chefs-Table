import React, { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';

const Prepare =({prepare}) =>{
    if (!prepare) {
        return <div>.</div>;
    }
    const {recipe_name, preparing_time, calories} = prepare;


    return(
        <div className="w-full">
            <div>
            <th className="">{recipe_name}</th>
            <th className="">{preparing_time} minutes</th>
            <th className="">{calories} calories</th> 
            </div>     
        </div>
    );
};
export default Prepare;