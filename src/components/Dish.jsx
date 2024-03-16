import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faSearch, faClock, faFire } from '@fortawesome/free-solid-svg-icons'

const Dish = ({item}) => {
    if (!item) {
        return <div>Loading...</div>;
    }
    const {recipe_image, recipe_name, short_description,ingredients, preparing_time, calories} = item;

    return (
        <div className="border-2 border-slate-200 p-6 rounded-2xl">
            <img className=" rounded-2xl" src={recipe_image} alt="" />
            <h1 className="font-bold text-xl pt-5">{recipe_name}</h1>
            <p className="font-medium text-base text-[#878787] pt-5">{short_description}</p>
            <h2 className="font-bold text-lg pt-6">Ingredients: {ingredients.length}</h2>
            <ul className="list-disc font-medium text-base text-[#878787] pl-6">
                {
                    ingredients.map(ing => <li>{ing}</li>)
                }
            </ul>
            <div className="flex gap-4 pt-6">
            <p className="font-medium text-base text-[#878787]"><FontAwesomeIcon icon={faClock} /> {preparing_time} minutes</p>
            <p className="font-medium text-base text-[#878787]"><FontAwesomeIcon icon={faFire} />  {calories} calories</p>
            </div>
            <button className="rounded-full bg-[#0BE58A] p-3 font-bold mt-6">Want To Cook</button>
        </div>
    );
}

export default Dish;
