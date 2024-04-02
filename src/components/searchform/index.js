// Import any necessary libraries or modules
import React from "react";

import "./searchform.css";
// Define your SearchForm component
function SearchForm() {
  // Add your form logic here

  return (
    <div className="search-form">
      <div className="keyword-input search-input-field">
        <span htmlFor="q"> Từ khóa </span>
        <input
          id="q"
          maxLength="512"
          name="q"
          placeholder="Tên việc, công ty, từ khóa"
          type="search"
          autoComplete="off"
        />
      </div>
      <div className="location-input search-input-field">
        <span htmlFor="l"> Địa điểm </span>
        <input
          id="l"
          maxLength="512"
          name="l"
          placeholder="Thành phố, quận, huyện"
          type="search"
          autoComplete="off"
        />
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
