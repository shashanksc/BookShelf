import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/logo.png";
import {HiOutlineMenuAlt3} from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [userName, setUserName] = useState('');
  const handleNavbar = () => setToggleMenu(!toggleMenu);
  if(userName==='') {
    console.log('User not specified');
  }
  const addUser = () => setUserName('Shashank');

  return (
    <nav className='navbar' id = "navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          
          <Link to = "/" className='navbar-brand flex'>
            <img className="navLogo" src = {logoImg} alt = "site logo" />
            <span className='text-uppercase fw-4 fs-20 ls-1' onClick={addUser}>BookWanderers</span>
          </Link>
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size = {35} style = {{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>
        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='navItem'>
              <Link to = "shelf">My Shelf</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar