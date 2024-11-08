import React, { useState } from 'react';
import logo from '../../assets/images/image01.svg'
import hamburger from '../../assets/images/image19.svg'
import cross from '../../assets/images/cross.svg'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-around p-3 text-base shadow-black-200 shadow-lg fixed w-full bg-white top-0">
     
      <div className="flex items-center">
        <p className='text-customBlue font-bold text-4xl'>Augmenta</p>
      </div>

    
      <div className="hidden lg:flex lg:items-center lg:space-x-4 lg:px-1 gap-6">
        <a href="#link1" className="hover:text-gray-300">Explore</a>
        <a href="#link2" className="hover:text-gray-300">Blog</a>
        <a href="#link3" className="hover:text-gray-300">Pricing</a>
       
        <button className="rounded-md border-2 border-customBlue block  py-2 hover:text-gray-300 w-[110px] text-customBlue">SIGN IN</button>
        <button className="rounded-md bg-customBlue block py-2 border-2  border-customBlue hover:text-gray-300 w-[200px] text-white">SIGN IN</button>

      </div>

        
      
      {/* Hamburger Icon */}
      <div className="lg:hidden" onClick={toggleDropdown}>
        <img src={!isOpen ? hamburger : cross } alt="hamburger" className="h-7" />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full md:hidden h-full bg-white">
          <div className="flex flex-col items-center p-4  bg-white">
            <a href="#link1" className="block my-2">Link 1</a>
            <hr className ="border-[1.5px] black w-full"/>
            <a href="#link2" className="block my-2 ">Link 2</a>
            <hr className ="border-[1.5px] black w-full"/>
            <a href="#link3" className="block my-2 ">Link 3</a>
            <hr className ="border-[1.5px] black w-full"/>
            <a href="#link4" className="block my-2 ">Link 4</a>
            <hr className ="border-[1.5px] black w-full"/>

            <button className="rounded-md border-2 border-customBlue block my-5 py-2 hover:text-gray-300 w-full text-customBlue">SIGN IN</button>
            <button className="rounded-md bg-customBlue block my-5 py-2 mt-0 hover:text-gray-300 w-full text-white">SIGN IN</button>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
