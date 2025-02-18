import { useState, useEffect } from "react"
import logo from "../src/assets/images/logo.svg"
import hamburger from "../src/assets/images/icon-hamburger.svg"
import close from "../src/assets/images/icon-close.svg"


export default function Navbar({onMenuToggle, menuOpen}) {
 
  return (
    <nav className="relative py-2">
      <div className="container px-4 mx-auto relative text-sm">
      <div className="flex justify-between items-center">
          <div className="pt-2">
            <img src={logo} alt="easy logo" />
          </div>
          <div className="hidden space-x-6 md:flex">
            <ul className="flex md:space-x-6 lg:space-x-12">
            <li className="nav-list-item"><a href="#" className="text-grayishBlue hover:text-darkBlue  hover:underline hover:decoration-limeGreen">Home</a></li>
            <li className="nav-list-item"><a href="#" className="text-grayishBlue hover:text-darkBlue hover:underline hover:decoration-limeGreen">About</a></li>
            <li className="nav-list-item"><a href="#" className="text-grayishBlue hover:text-darkBlue hover:underline hover:decoration-limeGreen ">Contact</a></li>
            <li className="nav-list-item"><a href="#" className="text-grayishBlue hover:text-darkBlue hover:underline hover:decoration-limeGreen">Blog</a></li>
            <li className="nav-list-item"><a href="#" className="text-grayishBlue hover:text-darkBlue hover:underline hover:decoration-limeGreen">Careers</a></li>
          </ul>
          </div>
          <button className="nav-btn hidden p-3 px-6 pt-2 text-white text-sm bg-gradient-to-r from-limeGreen to-brightCyan rounded-full baseline hover:text-lightGrayishBlue md:block">
             Request Invite
          </button>
          {/* menu items */}
          <div className="md:flex flex-col justify-end mr-4 p-2 lg:hidden">
            <button className="menu-btn flex items-center md:hidden focus:outline-none" onClick={onMenuToggle}>
               { menuOpen ? <img src={close} alt="close icon" className="w-6" /> : <img src={hamburger} alt="hamburger icon" className="w-8"/> }
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="absolute top-16 right-8 left-8 bg-white w-auto p-10 flex flex-col justify-center items-center rounded-md md:hidden">
            <ul>
              <li className="py-4 text-darkBlue font-medium text-xl"><a href="#">Home</a></li>
              <li className="py-4 text-darkBlue font-medium text-xl"><a href="#">About</a></li>
              <li className="py-4 text-darkBlue font-medium text-xl"><a href="#">Contact</a></li>
              <li className="py-4 text-darkBlue font-medium text-xl"><a href="#">Blog</a></li>
              <li className="py-4 text-darkBlue font-medium text-xl"><a href="#">Careers</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}