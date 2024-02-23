import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
        <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>A room without books is like a body without a soul</h2><br />
                <p className='header-text fs-18 fw-2'>Discover, Explore, and Create your very own virtual bookshelf with us. Whether you're a passionate reader, a book enthusiast, or simply looking to organize your reading list, <strong>BookWanderer</strong> is your go-to destination.
                </p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header