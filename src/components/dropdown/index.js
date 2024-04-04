import React, { useState } from "react";

import DownArrowIcon from "../../assets/svg/down-arrow-backup-2-svgrepo-com.svg";

import "./dropdown.css";

function DropDown({ data }) {
  const [selectedOption, setSelectedOption] = useState(data[0]);
  const [isShowDropDown, setIsShowDropDown] = useState(false);
  // const [activeButton, setActiveButton] = useState();
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
        <img
          className="dropdown-icon"
          src={DownArrowIcon}
          alt="dropdown-icon"
        />
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
