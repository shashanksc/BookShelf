import React, {useRef, useEffect} from 'react';
import {FaSearch} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context.';
import "./SearchForm.css";

const SearchForm = () => {
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
      setSearchTerm("Sherlock");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/book");
  };

  return (
    <div className='search-form1'>
      
        
    <form className='search-form2' onSubmit={handleSubmit}>
        <input type = "text" className='input' placeholder='Sherlock ...' ref = {searchText} />
        <button type = "submit" className='submit-btn' onClick={handleSubmit}>
          <FaSearch className='text-white' size = {32} />
        </button>
      
    </form>
  
</div>
  )
}

export default SearchForm