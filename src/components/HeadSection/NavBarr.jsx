import React, { useState } from 'react'
import "bootstrap";
import './NavBarr.css';
import './NavBarrRes.css';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';


export const NavBarr = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (630 >= (window.innerWidth)) {

    return (
      <>
        <nav className="navbar">
          <div className="nav-container">
            <button
              className={`nav-toggle ${isOpen ? 'active' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="nav-brand">
              <h5>𝓣𝓱𝓮 𝓗𝓸𝓷𝓮𝓼𝓽 𝓘 𝓢𝓮𝓮𝓷</h5>
            </div>

            <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
              <NavLink to='/' className="nav-link">HOME</NavLink>
              <NavLink to='about' className="nav-link">ABOUT</NavLink>
              <Link to='' className="nav-link">PRODUCTS</Link>
              <div >
                <NavLink to='purchase'><img src="src\assets\bxs-cart-add.svg" alt="" srcSet="" className='nav-card' /></NavLink>
              </div>
            </div>

          </div>
        </nav>



      </>
    )
  }
  else {
    return (
      <>

        <div className='nav-bar'>
          <div className='nav-bar-img'>
            {/* 𝓣𝓱𝓲𝓼 */}
            <img src="src\assets\this-black.png" alt="" srcSet="" className='nav-bar-img-in' />
          </div>
          <div className='nav-link'>
            <NavLink className='nav-head' to='/'>HOME</NavLink>
            <NavLink className='nav-head' to='about'>ABOUT</NavLink>
            <Link className='nav-head' >PRODUCTS</Link>
          </div>
          <div >
            <NavLink to='purchase'><img src="src\assets\bxs-cart-add.svg" alt="" srcSet="" className='nav-card' /></NavLink>
          </div>
        </div>
      </>
    )
  }
}
