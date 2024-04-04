/* eslint-disable jsx-a11y/label-has-associated-control */
// Import any necessary libraries or modules
import React from "react";

import LocationPinIcon from "../../assets/svg/location-pin-svgrepo-com.svg";
import SearchIcon from "../../assets/svg/search-svgrepo-com.svg";

import "./searchform.css";
// Define your SearchForm component
function SearchForm() {
  // Add your form logic here

  return (
    <div className="search-form">
      <div className="keyword-input search-input-field">
        <label htmlFor="q"> Từ khóa </label>
        <div className="input-field">
          <input
            id="q"
            maxLength="512"
            name="q"
            placeholder="Tên việc, công ty, từ khóa"
            type="search"
            autoComplete="off"
          />
          <div className="ti-search">
            <img className="search-icon" src={SearchIcon} alt="search-icon" />
          </div>
        </div>
      </div>
      <div className="location-input search-input-field">
        <label htmlFor="l"> Địa điểm </label>
        <div className="input-field">
          <input
            id="l"
            maxLength="512"
            name="l"
            placeholder="Thành phố, quận, huyện"
            type="search"
            autoComplete="off"
            icon="location"
          />
          <div className="ti-search">
            <img
              className="location-icon"
              src={LocationPinIcon}
              alt="location-icon"
            />
          </div>
        </div>
      </div>
      <div className="search-button">
        <button type="submit" className="search-job-button">
          <span>Tìm việc làm</span>
        </button>
      </div>
    </div>
  );
}

// Export the SearchForm component
export default SearchForm;