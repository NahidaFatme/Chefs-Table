import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Dishes from './components/Dishes'
import Dish from './components/Dish'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <>
      <div className='container mx-auto py-5 lg:py-12 px-5 lg:px-32'>
        <Navbar></Navbar>
        <Dishes></Dishes>
        <Dish></Dish>
      </div>
    </>
  )
}

export default App
