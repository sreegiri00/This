import React, { useContext, useEffect, useState } from 'react'
import "bootstrap";
import './NavBarr.css';
import './NavBarrRes.css';
import { NavLink, Link } from 'react-router-dom';
import { Badge, Menu, X } from 'lucide-react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../../index';
import MailIcon from '@mui/icons-material/Mail';


export const NavBarr = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { focused } = useContext(ThemeContext)
  const [storeCount, setStoreCount] = useState()
  const count = useSelector((state) => state.addToCartSlice.count);

  useEffect(() => {
    if (0 !== count) {
      if (9 < count) { setStoreCount("9+") }
      else setStoreCount(count)
    }
    else setStoreCount(0);
  }, [count]);

  const inputFocused = () => {
    if (focused.current) {
      focused.current.focus()
    }
    window.scrollBy({ top: 900, behavior: "smooth" });

  }

  if (630 >= (window.innerWidth)) {

    return (
      <>
        <nav className='nav-bar-res'>
          <div className="nav-container">
            <button
              className={`nav-toggle ${isOpen ? 'active' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="nav-brand">
              <h5> 𝓟𝓻𝓸𝓭𝓾𝓬𝓽 𝓩𝓸𝓷𝓮</h5>
            </div>

            <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
              <NavLink to='/' className="nav-link">HOME</NavLink>
              <NavLink to='about' className="nav-link">ABOUT</NavLink>
              <Link to='' className="nav-link" onClick={inputFocused}>PRODUCTS</Link>
            </div>
            <div className='navbar-res-cart' >
              <NavLink to='addcart'>
                <div className="nav-purchase"><h1 className='nav-purchase-count'>{storeCount}</h1></div>
                <FontAwesomeIcon icon={faCartShopping} />

              </NavLink>

            </div> <NavLink to='/login' className='nav-head'>
              <FontAwesomeIcon icon={faUser} />
            </NavLink>
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
            <img srcSet="src\assets\PZ.png" alt="" className='nav-bar-img-in' />
          </div>
          <div className='nav-link'>
            <NavLink className='nav-head' to='/'>HOME</NavLink>
            <NavLink className='nav-head' to='about'>ABOUT</NavLink>
            <NavLink className='nav-head' to='/' onClick={inputFocused}>PRODUCTS</NavLink>
          </div>
          <div className='nav-link-sub' >
            <div>
              <NavLink to='addcart'>

                {/* <Badge badgeContent={4} color="primary">
                  <MailIcon color="action" />
                </Badge> */}

                <div className="nav-purchase"><h1 className='nav-purchase-count'>{storeCount}</h1></div>
                <FontAwesomeIcon icon={faCartShopping} />
              </NavLink>
            </div>
            <div className='nav-link-user link'>
              <NavLink to='/login' className='nav-head'>
                <FontAwesomeIcon icon={faUser} />
              </NavLink>
            </div>
          </div>
        </div>
      </>
    )
  }
}
