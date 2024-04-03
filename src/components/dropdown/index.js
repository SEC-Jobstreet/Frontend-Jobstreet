import React, { useState } from "react";

import DownArrowIcon from "../icon/downarrow-icon";

import "./dropdown.css";

function DropDown({ data }) {
  const [selectedOption, setSelectedOption] = useState(data[0]);
  const [isShowDropDown, setIsShowDropDown] = useState(false);
  const handleSelect = (title) => {
    setSelectedOption(title);
  };

  const toggleDropDown = () => {
    setIsShowDropDown(!isShowDropDown);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      toggleDropDown();
    }
  };

  return (
    <div
      className="dropdown-button"
      role="button"
      onClick={toggleDropDown}
      onKeyPress={handleKeyPress}
      tabIndex={0}
    >
      {selectedOption}
      <div className="dropdown-icon">
        <DownArrowIcon />
      </div>
      {isShowDropDown && (
        <ul className="dropdown-option-container">
          {data.map((option) => (
            <li key={option}>
              <button
                type="button"
                className="dropdown-item"
                onClick={() => handleSelect(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropDown;
