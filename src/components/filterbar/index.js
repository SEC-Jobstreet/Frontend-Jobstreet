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
            <div className="quick-apply-label heading-medium">
              Nộp đơn nhanh
            </div>
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
      <div className="filter-bar-mobile">
        <div className="filter-bar-mobile-header">
          <button className="close-modal-button" type="button">
            Trở lại
          </button>
          <h3 className="filter-bar-mobile-title">Sàng lọc</h3>
          <button className="clear-modal-button" type="button">
            Xóa
          </button>
        </div>
        <div className="refine-search-facet">
          <h4>Sắp xếp</h4>
          <button className="option-button" type="button">
            Độ chính xác
          </button>
          <button className="option-button" type="button">
            Ngày
          </button>
        </div>
        <div className="refine-search-facet">
          <h4>Những sàng lọc phổ biến</h4>
          <button className="option-button" type="button">
            Nộp đơn nhanh
          </button>
        </div>
        <div className="refine-search-facet">
          <h4>Thời gian</h4>
          <button className="option-button" type="button">
            Mọi loại việc
          </button>
          <button className="option-button" type="button">
            Full time
          </button>
          <button className="option-button" type="button">
            Part time
          </button>
          <button className="option-button" type="button">
            Permanent
          </button>
          <button className="option-button" type="button">
            Internship
          </button>
          <button className="option-button" type="button">
            Casual/Temporary
          </button>
        </div>
        <div className="refine-search-facet">
          <h4>Ngày đăng</h4>
          <button className="option-button" type="button">
            Mọi thời gian
          </button>
          <button className="option-button" type="button">
            24 giờ qua
          </button>
          <button className="option-button" type="button">
            7 ngày qua
          </button>
          <button className="option-button" type="button">
            14 ngày qua
          </button>
          <button className="option-button" type="button">
            30 ngày qua
          </button>
        </div>
        <div className="refine-search-facet">
          <h4>Khoảng cách</h4>
          <button className="option-button" type="button">
            Tại địa điểm này
          </button>
          <button className="option-button" type="button">
            5km
          </button>
          <button className="option-button" type="button">
            10km
          </button>
          <button className="option-button" type="button">
            25km
          </button>
          <button className="option-button" type="button">
            50km
          </button>
          <button className="option-button" type="button">
            100km
          </button>
        </div>
        <div className="find-button-section">
          <button className="find-button" type="button">
            Chỉnh tìm kiếm
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
