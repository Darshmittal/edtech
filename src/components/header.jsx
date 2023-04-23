import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './css/header.css';
import { UserContext } from './context/programprovider';
import DropDown from './dropdown';
const Header = () => {
  const { selectedOption, handleOptionClick } = useContext(UserContext) || {};

  

  return (
    <div className="header">
      <div className="menu-icon">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="logo">EdYoda</div>
      <br/>
      <div className="program-container">
      {/* <Dropdown
        options={['Option 1', 'Option 2', 'Option 3']}
        selectedOption={selectedOption}
        onOptionClick={handleOptionClick}
      /> */}
      </div>
      <div className="app-bar">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/page2">Module</a>
          </li>
          <li>
            <a href="/page3">Instructor</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;