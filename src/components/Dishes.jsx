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
        <div className="w-3/5">
            <div class="flex flex-col gap-6 text-center ">
                <h2 class="font-bold text-4xl">Our Recipes</h2>
                <p class="font-normal text-base text-[#150B2B99] pb-6">The cart contains a collection of recipes chosen by the user, each offering a unique culinary experience, from classic Italian Spaghetti Carbonara to flavorful Indian Chicken Curry.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
            {
                items.map(item => <Dish item={item} handleWantToCook={handleWantToCook}></Dish>)
            }
            </div>
        </div>
    );
}

export default Dishes;
