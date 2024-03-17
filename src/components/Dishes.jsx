import React, { useEffect, useState } from "react";
import Dish from "./Dish";

const Dishes = ({handleWantToCook}) => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data))
            
    }, []);

    return (
        
        <div className="w-full lg:w-3/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {
                items.map(item => <Dish item={item} handleWantToCook={handleWantToCook}></Dish>)
            }
            </div>
        </div>
    );
}

export default Dishes;
