import React from "react";
import Prepare from "./Prepare";
import DataTable from 'react-data-table-component';

const Prepares =({prepares}) =>{
    if (!prepares) {
        return <div>.</div>;
    }
    const {recipe_name, preparing_time, calories} = prepares;
    
    return(
        <div className="mt-16">
            <h1 className="font-bold text-2xl pb-4">Currently Cooking : {prepares.length}</h1>
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
                          prepares.map(prepare => <Prepare prepare={prepare}></Prepare>)
                        }
                    </tr>
                </tbody>
            </table> 
        </div>
    );
};
export default Prepares;