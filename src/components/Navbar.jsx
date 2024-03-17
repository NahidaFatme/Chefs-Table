import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faSearch } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
 return(
    <div className="">
        {/* Navbar */}
        <div className="navbar bg-base-100 flex justify-between align-center">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg text-[#150B2BB3]">
                    <li>Home</li>
                    <li>Recipies</li>
                    <li>About</li>
                    <li>Search</li>
                </ul>
                </div>
                <a className="text-3xl font-bold">Chefs Table</a>
            </div>
            <div className="navbar-center hidden lg:flex text-lg text-[#150B2BB3]">
                <ul className="flex justify-between gap-4">
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>About</li>
                    <li>Search</li>
                </ul>
            </div>
            <div className="flex-none gap-2 navbar-end">
                <div className="relative">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto pl-10 rounded-full bg-[#150B2B0D]" />
                    <FontAwesomeIcon icon={faSearch} className="absolute left-4 bottom-4 text-gray-400" />
                </div>
                <div className="dropdown dropdown-end">
                <div  className="btn btn-ghost btn-circle bg-[#0BE58A]">
                    <button className=""><FontAwesomeIcon icon={faUser} /></button>
                </div>
                </div>
            </div>
        </div>
        {/*Banner  */}
        <div class="py-5 lg:py-12">
            <div class="w-full h-full lg:h-[550px] bg-black rounded-3xl bg-[url('https://i.ibb.co/hVcDbP8/banner.png')] bg-cover bg-no-repeat bg-center">
                <div class="flex flex-col lg:flex-row gap-4 p-6 lg:p-32 justify-center">
                    <div class="text-center w-9/12">
                        <h2 class="text-2xl lg:text-5xl text-white font-bold pb-6">Discover an exceptional cooking <br /> class tailored for you!</h2>
                        <p class="text-lg text-white font-normal pb-4 lg:pb-8 custom-line-height">Mix flour, eggs, and milk in a bowl to create a pancake batter. Heat a non-stick pan, pour the batter, cook until golden, then flip to cook the other side.</p>
                        <div className="flex justify-center items-center gap-6 rounded-full">
                            <button class=" bg-[#0BE58A] text-black  py-5 px-8 font-bold rounded-full">Explore now</button>
                            <button class="bg-transparent border-2 border-white text-white py-2 lg:py-5 px-4 lg:px-8 font-bold rounded-full">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 );
};

export default Navbar;