import FilterBar from "./filterbar";
import FilterBarMobile from "./filterbarmobile";
import SearchForm from "./searchform";

import styles from "./searchheader.module.css";

function SearchHeader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.searchFormWrapper}>
        <SearchForm />
      </div>

      <FilterBar />
      <FilterBarMobile />
    </div>
  );
}

export default SearchHeader;
