import React, { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import Cook from "./Cook";
import Prepares from "./Prepares";

const Sidebar =({cooks, handleRemoveCooks}) =>{
      const [prepares, setPrepares] = useState([]);
      const [totalTime, setTotalTime] = useState(0);
      const [totalCalories, setTotalCalories] = useState(0);
      
      const handlePreparing = (cook, preparing_time, calories, recipe_id) => {
        const newPrepares = [...prepares, cook];
        setPrepares(newPrepares);
        setTotalTime(totalTime + preparing_time);
        setTotalCalories(totalCalories + calories);
        
    }
    return(
        <div className="border-2 w-2/5 border-slate-200 p-6 rounded-2xl text-center">
            <h1 className="font-bold text-2xl pb-4">Want To Cook : {cooks.length}</h1>
            <hr />
            <table className="table table-fixed text-base font-normal text-[#282828B3]">
                <thead>
                    <tr>
                        <th className="text-lg text-black">Name</th>
                        <th className="text-lg text-black">Time</th>
                        <th className="text-lg text-black">Calories</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="w-full">
                    <tr>
                        {
                            cooks.map(cook => <Cook cook={cook} handlePreparing = {handlePreparing} handleRemoveCooks={handleRemoveCooks}></Cook>)
                        }
                    </tr>
                </tbody>
            </table> 

            <Prepares prepares={prepares} ></Prepares>

            <div className="flex gap-4 justify-end text-base font-normal text-[#282828B3] mt-5">
            <h2>Total Time: {totalTime} minutes</h2>
            <h2>Total Calories: {totalCalories} calories</h2>
            </div> 
            </div>
    );
};
export default Sidebar;