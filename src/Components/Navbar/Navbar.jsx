
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className='bg-slate-950 py-4 md:py-6 sticky top-0 z-50'>
      <div className="container mx-auto px-4 flex items-center justify-between relative">
        {/* Logo / Branding */}
        <div className="text-3xl">
          <Link to="/" className='text-white font-bold'>
          Costa Rico 
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden  text-2xl"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>

        {/* Navigation Links */}
        <div
          className={`flex-col md:flex-row md:flex md:items-center absolute top-full left-0 w-full md:relative md:top-0 md:left-auto md:w-auto bg-slate-950 ${isMenuOpen ? 'block' : 'hidden'} md:block`}
         // Adjust background color if needed
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 text-white text-lg md:text-xl p-4 md:p-0">
            <li className="py-2"><NavLink to="/about">ABOUT</NavLink></li>
            <li className="py-2"><NavLink to="/portfolio" >PORTFOLIO</NavLink></li>
            <li className="py-2"><NavLink to="/contact">CONTACT</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
