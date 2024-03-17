import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Dishes from './components/Dishes'
import Dish from './components/Dish'
import Sidebar from './components/Sidebar'
import Cook from './components/Cook'
import Prepares from './components/Prepares'
import Prepare from './components/Prepare'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  const [cooks, setCooks] = useState([]);
  const handleWantToCook = item => {
    if (cooks.some(cook => cook.recipe_id === item.recipe_id)) {
      
      toast("This Item is already selected !!");
    } else {
      const newCooks = [...cooks, item];
      setCooks(newCooks);
    }
  }

  const handleRemoveCooks = recipe_id =>{
    const remainingCooks = cooks.filter(cook =>cook.recipe_id !== recipe_id);
    setCooks(remainingCooks);
  }
  return (
    <>
      <div className='container mx-auto py-5 lg:py-12 px-5 lg:px-32'>
        <Navbar></Navbar>
        <div class="flex flex-col gap-6 text-center px-10 lg:px-60">
                <h2 class="font-bold text-4xl">Our Recipes</h2>
                <p class="font-normal text-base text-[#150B2B99] pb-6">The cart contains a collection of recipes chosen by the user, each offering a unique culinary experience, from classic Italian Spaghetti Carbonara to flavorful Indian Chicken Curry.</p>
        </div>
        <div className='flex flex-col lg:flex-row gap-4'>
        <Dishes handleWantToCook={handleWantToCook}></Dishes>
        <Dish></Dish>
        <Sidebar cooks={cooks} handleRemoveCooks={handleRemoveCooks}></Sidebar>
        <Cook></Cook>
        <Prepares></Prepares>
        <Prepare></Prepare>
        </div>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
