import React, { useState, useEffect } from 'react';
import "./Shelf.css";
import {FaArrowLeft} from "react-icons/fa";
import shelfImg from "../../images/shelf.jpg";
import { useNavigate } from 'react-router-dom';
const About = () => {
  const [localStorageValues, setLocalStorageValues] = useState([]);
  const navigate = useNavigate();
  const remove = (keyToRemove) => {
    localStorage.removeItem(keyToRemove);
    // Update the component's state to reflect the removal
    setLocalStorageValues((prevValues) =>
      prevValues.filter((item) => item.key !== keyToRemove)
    );
  };
  useEffect(() => {
    // Function to retrieve and store local storage values
    const getLocalStorageValues = () => {
      const values = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        values.push({ key, value });
      }
      return values;
    };

    // Fetch and store local storage values when the component mounts
    const values = getLocalStorageValues();
    setLocalStorageValues(values);
  }, []);
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>My Shelf</h2>
        </div>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/book")}>
          <FaArrowLeft size = {22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>
        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {shelfImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>My BookList</h2>
            <div>
      
                <ul>
                  {localStorageValues.map((item) => (
                    <li key={item.key}>
                      
                      <div className="centered-div">{item.value}</div>
                      <div className="centered-div">
                      <div className='removeBtn' onClick={() => remove(item.key)}>Remove</div>
                      </div>
                      
                      
                  
                    </li>
                  ))}
                </ul>
              </div>

            </div>
        </div>
      </div>
    </section>
  )
}

export default About