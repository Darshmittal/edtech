import React from "react";
import { Link } from "react-router-dom";
import "./css/module.css";

const ModulesPage = () => {
  return (
    <div className="modules">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/instructor">Instructor</Link>
          </li>
        </ul>
      </nav>
      <div className="vertical-bar">
        <ul>
          <li>
            <Link to="/modules/topic">
              <i className="fas fa-book"></i>
              <span>Topic</span>
            </Link>
          </li>
          <li>
            <Link to="/modules/quiz">
              <i className="fas fa-question-circle"></i>
              <span>Quiz</span>
            </Link>
          </li>
          <li>
            <Link to="/modules/assignment">
              <i className="fas fa-file-alt"></i>
              <span>Assignment</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="modules-content">
        <p>Select a module on the left to get started.</p>
      </div>
    </div>
  );
};

export default ModulesPage;