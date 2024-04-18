/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Form } from "react-bootstrap";

import DropDown from "../dropdown";

import styles from "./filterbar.module.css";

const TypeOfJob = [
  "Mọi loại việc",
  "Full time",
  "Part time",
  "Permanent",
  "Internship",
  "Contract",
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
  const [filters, setFilters] = useState({
    sortType: "Độ chính xác",
    jobType: "Mọi loại việc",
    date: "Mọi thời gian",
    distance: "Bán kính 25km",
  });
  const [checked, setChecked] = useState(false);

  const handleFilterValueChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };
  const handleSwitchChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleResetButtonClick = () => {
    setFilters({
      sortType: "Độ chính xác",
      jobType: "Mọi loại việc",
      date: "Mọi thời gian",
      distance: "Bán kính 25km",
    });
  };

  return (
    <div className={styles.filterBarContainer}>
      <div className={styles.filterBar}>
        <div className={styles.sortType}>
          <span> Sắp xếp: &nbsp;</span>
          <button
            type="button"
            className={
              filters.sortType === "Độ chính xác"
                ? `${styles.active} ${styles.sortLink}`
                : `${styles.sortLink}`
            }
            onClick={() => handleFilterValueChange("sortType", "Độ chính xác")}
          >
            Độ chính xác
          </button>
          &nbsp;/&nbsp;
          <button
            type="button"
            className={
              filters.sortType === "Ngày"
                ? `${styles.active} ${styles.sortLink}`
                : `${styles.sortLink}`
            }
            onClick={() => handleFilterValueChange("sortType", "Ngày")}
          >
            Ngày
          </button>
        </div>
        <div className={styles.dropdowns}>
          <DropDown
            data={TypeOfJob}
            option={filters.jobType}
            handleOptionChange={(value) => {
              handleFilterValueChange("jobType", value);
            }}
          />
          <DropDown
            data={DatePosted}
            option={filters.date}
            handleOptionChange={(value) => {
              handleFilterValueChange("date", value);
            }}
          />
          <DropDown
            data={Distance}
            option={filters.distance}
            handleOptionChange={(value) => {
              handleFilterValueChange("distance", value);
            }}
          />
        </div>
        <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
          label="Nộp đơn nhanh"
          onChange={handleSwitchChange}
          checked={checked}
          reverse
          className={styles.quickApplyFilter}
        />
        <button
          type="button"
          className={styles.resetFilters}
          onClick={handleResetButtonClick}
        >
          Đặt lại tất cả các bộ lọc
        </button>
      </div>
    </div>
  );
}

export default FilterBar;
