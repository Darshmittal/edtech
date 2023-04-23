import React from "react";
import { Link } from "react-router-dom";

const InstructorPage = () => {
  return (
    <div className="instructor">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/modules">Modules</Link>
          </li>
        </ul>
      </nav>
      <div className="instructor-content">
        <h1>Welcome Instructor!</h1>
        <p>There is no functionality on this page.</p>
      </div>
    </div>
  );
};

export default InstructorPage;