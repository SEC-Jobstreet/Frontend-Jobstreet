/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import FilterIcon from "../../../assets/svg/filter-icon.svg";
import LeftArrowIcon from "../../../assets/svg/left-arrow-icon.svg";
import FilterSelect from "../filterselect";

import "./filterbarmobile.css";

const TypeOfSort = ["Độ chính xác", "Ngày"];

const TypeOfJob = [
  "Mọi loại việc",
  "Bán thời gian",
  "Thực tập",
  "Casual/Temporary",
];
const TypeOfDated = [
  "Mọi thời gian",
  "24 giờ qua",
  "7 ngày qua",
  "14 ngày qua",
  "30 ngày qua",
];
const TypeOfDistance = [
  "Tại địa điểm này",
  "Bán kính 5km",
  "Bán kính 10km",
  "Bán kính 25km",
  "Bán kính 50km",
  "Bán kính 100km",
];
function FilterBarMobile() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  const handleQuickSubmit = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="filter-bar-mobile">
      <div className="filter-bar-mobile-button">
        <button
          className="open-modal-button"
          type="button"
          onClick={handleOpenModal}
        >
          <img className="filter-icon" src={FilterIcon} alt="filter-icon" />
          <span>Sàng lọc</span>
        </button>
      </div>
      {isOpenModal && (
        <div className="filter-bar-mobile-modal">
          <div className="filter-bar-mobile-header">
            <button
              className="close-modal-button"
              type="button"
              onClick={handleCloseModal}
            >
              <img
                className="left-arrow-icon"
                src={LeftArrowIcon}
                alt="left-arrow-icon"
              />
              Trở lại
            </button>
            <h3 className="filter-bar-mobile-title">Sàng lọc</h3>
            <button className="clear-modal-button" type="button">
              Xóa
            </button>
          </div>
          <div className="refine-search-facet">
            <h4>Sắp xếp</h4>
            <FilterSelect data={TypeOfSort} />
          </div>
          <div className="refine-search-facet">
            <h4>Những sàng lọc phổ biến</h4>
            <button
              className={`option-button ${isActive ? "active" : ""}`}
              type="button"
              onClick={handleQuickSubmit}
            >
              Nộp đơn nhanh
            </button>
          </div>
          <div className="refine-search-facet">
            <h4>Thời gian</h4>
            <FilterSelect data={TypeOfJob} />
          </div>
          <div className="refine-search-facet">
            <h4>Ngày đăng</h4>
            <FilterSelect data={TypeOfDated} />
          </div>
          <div className="refine-search-facet">
            <h4>Khoảng cách</h4>
            <FilterSelect data={TypeOfDistance} />
          </div>
          <div className="find-button-section">
            <button className="find-button" type="button">
              Chỉnh tìm kiếm
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default FilterBarMobile;
