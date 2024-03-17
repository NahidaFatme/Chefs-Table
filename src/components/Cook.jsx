import React, { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import Sidebar from "./Sidebar";

const Cook =({cook, handlePreparing, handleRemoveCooks}) =>{
    if (!cook) {
        return <div>.</div>;
    }
    
    const {recipe_name, preparing_time, calories, recipe_id} = cook;
    return(
        <div className="">
            <th className="">{recipe_name}</th>
            <th className="">{preparing_time} minutes</th>
            <th className="">{calories} calories</th>   
            <th>
                <button 
                onClick={() => {
                    handleRemoveCooks(recipe_id);
                    handlePreparing(cook, preparing_time, calories, recipe_id);
                }}
                className="rounded-full bg-[#0BE58A] p-3 font-bold">
                    preparing
                </button>
                
            </th>
        </div>
    );
};
export default Cook;