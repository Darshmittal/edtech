import React from 'react';
import { Link } from 'react-router-dom';

const LeftNavigation = () => {
  return (
    <div className="left-navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/page3">Instructor</Link>
        </li>
        <li>
          <Link to="/page2">Module</Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftNavigation;
