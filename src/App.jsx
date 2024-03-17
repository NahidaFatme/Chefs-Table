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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function App() {

  const [cooks, setCooks] = useState([]);
  const handleWantToCook = item => {
    const newCooks = [...cooks, item];
    setCooks(newCooks);
  }

  return (
    <>
      <div className='container mx-auto py-5 lg:py-12 px-5 lg:px-32'>
        <Navbar></Navbar>
        <div className='flex gap-4'>
        <Dishes handleWantToCook={handleWantToCook}></Dishes>
        <Dish></Dish>
        <Sidebar cooks={cooks}></Sidebar>
        <Cook></Cook>
        <Prepares></Prepares>
        <Prepare></Prepare>
        </div>
      </div>
    </>
  )
}

export default App
