import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

import styles from "./dropdown.module.css";

function DropDown({ data, option, handleOptionChange }) {
  const [isShowDropDown, setIsShowDropDown] = React.useState(false);

  const toggleDropDown = () => {
    setIsShowDropDown(!isShowDropDown);
  };

  return (
    <Dropdown
      className="d-inline mx-2"
      show={isShowDropDown}
      onToggle={toggleDropDown}
    >
      <Dropdown.Toggle
        className={
          isShowDropDown
            ? `${styles.dropdownButton} ${styles.active}`
            : `${styles.dropdownButton}`
        }
      >
        {option}
      </Dropdown.Toggle>
      <Dropdown.Menu className={styles.dropdownOptionContainer}>
        {data.map((item) => (
          <Dropdown.Item
            key={item}
            className={styles.dropdownItem}
            onClick={() => handleOptionChange(item)}
          >
            {item}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;
