import React from "react";
import { Button, Form } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

// import LocationPinIcon from "../../assets/svg/location-pin-svgrepo-com.svg";
// import SearchIcon from "../../assets/svg/search-svgrepo-com.svg";
import "./input.css";
import styles from "./searchform.module.css";

function SearchForm() {
  const [keyword, setKeyword] = React.useState("");
  const [place, setPlace] = React.useState("");

  const navigate = useNavigate();
  const handleSubmitButtonClick = () => {
    navigate("/search?keyword=&location=");
  };
  const getTitleDate = () => {
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1; // Tháng bắt đầu từ 0
    const year = currentDate.getFullYear();
    return `${month}/${year}`;
  };
  const isSearchPage = () => {
    const currentURL = window.location.href;

    if (currentURL.includes("/search")) {
      return true;
    }
    return false;
  };

  return (
    <>
      {isSearchPage && (
        <Helmet>
          <title>
            Tuyển dụng, tìm việc làm {keyword} tại {place} - {getTitleDate()} |
            JobStreet
          </title>
        </Helmet>
      )}
      <Form className={styles.wrapper} onSubmit={handleSubmitButtonClick}>
        <Form.Group className={`${styles.keyInput} ${styles.input}`}>
          <Form.Label>Từ khóa</Form.Label>
          <Form.Control
            type="search"
            placeholder="Tên việc, công ty, từ khóa"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className={`${styles.placeInput} ${styles.input}`}>
          <Form.Label>Địa điểm</Form.Label>
          <Form.Control
            type="search"
            placeholder="Thành phố, quận, huyện"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" className={styles.submitButton}>
          <span>Tìm việc làm</span>
        </Button>
      </Form>
    </>
  );
}

export default SearchForm;
