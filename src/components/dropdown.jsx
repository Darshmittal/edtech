import React, { useState } from 'react';

function DropDown({ options }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      {options.map((option) => (
        <button key={option} onClick={() => handleOptionClick(option)}>
          {option}
        </button>
      ))}
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
}

export default DropDown;