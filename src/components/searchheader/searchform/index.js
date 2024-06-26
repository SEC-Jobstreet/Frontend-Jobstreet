import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./input.css";
import styles from "./searchform.module.css";

function SearchForm() {
  const [keyword, setKeyword] = React.useState("");
  const [place, setPlace] = React.useState("");

  const navigate = useNavigate();
  const handleSubmitButtonClick = (e) => {
    let historySearch = JSON.parse(localStorage.getItem("historySearch")) || [];
    historySearch = [{ keyword, location: place }, ...historySearch];
    localStorage.setItem(
      "historySearch",
      JSON.stringify(historySearch.slice(0, 5))
    );

    e.preventDefault();
    navigate(`/search?keyword=${keyword}&location=${place}`);
  };
  return (
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
  );
}

export default SearchForm;
