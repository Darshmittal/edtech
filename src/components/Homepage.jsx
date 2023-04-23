import React, { useState,useContext } from 'react';
import './css/homepage.css';
import { UserContext } from './context/programprovider';

// import dataScientistIcon from './data-scientist-icon.png';

function Homepage() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const {selectedOption, setSelectedOption} = useContext(UserContext);
  const [isActive, setIsActive] = useState(false);

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
    setIsActive(!isActive);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
    setIsActive(false);
  };

  const programDescriptions = {
    'Data Scientist Program': 'Our Data Scientist Program is designed to give you a deep understanding of data analysis and machine learning techniques.',
    'Web Developer Program': 'Our Web Developer Program teaches you everything you need to know to create modern web applications, from HTML and CSS to advanced JavaScript frameworks.',
    'UX Designer Program': 'Our UX Designer Program focuses on user-centered design principles and teaches you how to create engaging and intuitive digital experiences.'
  }

  return (
    <div className="homepage">
  
      <div className="header">
        {/* <div className="logo">YourLogo</div> */}
        {/* <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav> */}
      </div>
      <div className="hero">
        <h1>Welcome to Edyoda</h1>
        <p>Find the program that's right for you</p>
        <div className={`dropdown-container ${isActive ? 'active' : ''}`}>
          <button className={`dropdown-header ${isActive ? 'active' : ''}`} onClick={handleDropdownClick}>
            <span>Choose a Program</span>
            {/* <img src={dataScientistIcon} alt="Data Scientist Icon" className="dropdown-icon" /> */}
            <i className={`fa fa-caret-down ${isActive ? 'active' : ''}`} />
          </button>
          {dropdownOpen && (
            <div className="dropdown-options">
              <div className="option" onClick={() => handleOptionClick('Data Scientist Program')}>
                Data Scientist Program
              </div>
              <div className="option" onClick={() => handleOptionClick('Web Developer Program')}>
                Web Developer Program
              </div>
              <div className="option" onClick={() => handleOptionClick('UX Designer Program')}>
                UX Designer Program
              </div>
            </div>
          )}
        </div>
      </div>
      {selectedOption && (
        <div className="selected-option">
          <p>You selected:</p>
          <h2>{selectedOption}</h2>
          <p>{programDescriptions[selectedOption]}</p>
        </div>
      )}
      <div className="static-content">
        <h2>Why Choose Edyoda?</h2>
        <ul>
          <li>Flexible scheduling options</li>
          <li>Experienced instructors</li>
          <li>Hands-on learning</li>
          <li>Community of like-minded learners</li>
        </ul>
      </div>
    </div>
  );
}

export default Homepage;

