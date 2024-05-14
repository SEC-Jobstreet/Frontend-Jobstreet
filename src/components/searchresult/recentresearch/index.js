import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./recentresearch.module.css";

function RecentResearch() {
  const historySearch = JSON.parse(localStorage.getItem("historySearch")) || [];
  const data = historySearch.map((item, index) => {
    let title = "";
    if (item.keyword === "" && item.location === "") {
      title = "Tất cả việc làm";
    } else if (item.keyword === "") {
      title = item.location;
    } else if (item.location === "") {
      title = item.keyword;
    } else {
      title = `${item.keyword} - ${item.location}`;
    }
    title += index.toString();
    return {
      title,
      keyword: item.keyword,
      location: item.location,
    };
  });
  const [history, setHistory] = useState(data);

  const handleClearButtonClick = () => {
    localStorage.removeItem("historySearch");
    setHistory([]);
  };

  const localStorageEmpty = data.length === 0;
  return (
    <div>
      {!localStorageEmpty && ( // Conditionally render based on localStorageEmpty
        <div className={styles.wrapper}>
          <div className={styles.historySearchHeader}>
            <h3 className={styles.header}>Tìm kiếm gần đây</h3>
            <button
              className={styles.clearButton}
              type="button"
              onClick={handleClearButtonClick}
            >
              Xoá
            </button>
          </div>
          {history.map((item) => (
            <Link
              to={`/search?keyword=${item.keyword}&location=${item.location}`}
              className={styles.recentResearch}
              key={item.title} // Add a unique key for each link
            >
              <div className={styles.title}>{item.title}</div>
              <div className={styles.number}>123</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecentResearch;
