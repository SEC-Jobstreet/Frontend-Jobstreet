/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import DropDown from "../dropdown";

import "./filterbar.css";

const TypeOfJob = [
  "Mọi loại việc",
  "Bán thời gian",
  "Thực tập",
  "Casual/Temporary",
];
const DatePosted = [
  "Mọi thời gian",
  "24 giờ qua",
  "7 ngày qua",
  "14 ngày qua",
  "30 ngày qua",
];
const Distance = [
  "Tại địa điểm này",
  "Bán kính 5km",
  "Bán kính 10km",
  "Bán kính 25km",
  "Bán kính 50km",
  "Bán kính 100km",
];

function FilterBar() {
  const [activeButton, setActiveButton] = useState("Độ chính xác");
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleClick = (label) => {
    setActiveButton(label);
  };

  return (
    <div className="filter-bar-container">
      <div className="filter-bar">
        <div className="sort-container">
          <span className="sort-label"> Sắp xếp: </span>
          <button
            type="button"
            className={`sort-link ${activeButton === "Độ chính xác" ? "active" : ""}`}
            onClick={() => handleClick("Độ chính xác")}
          >
            Độ chính xác
          </button>
          <text> / </text>
          <button
            type="button"
            className={`sort-link ${activeButton === "Ngày" ? "active" : ""}`}
            onClick={() => handleClick("Ngày")}
          >
            Ngày
          </button>
        </div>
        <div className="dropdowns">
          <div>
            <DropDown data={TypeOfJob} />
            <DropDown data={DatePosted} />
            <DropDown data={Distance} />
          </div>
        </div>
        <div className="quick-apply-filter">
          <div className="quick-apply-control-container">
            <div className="quick-apply-label">Nộp đơn nhanh</div>
            <label className="switch" htmlFor="quick-apply-label">
              <input
                type="checkbox"
                id="quick-apply-label"
                checked={checked}
                onChange={handleChange}
              />
              <span className="slider round" />
            </label>
          </div>
        </div>
        <a className="reset-filters" data-href="#">
          Đặt lại tất cả bộ lọc
        </a>
      </div>
    </div>
  );
}

export default FilterBar;
