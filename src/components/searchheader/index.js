import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";

import FilterBar from "./filterbar";
import FilterBarMobile from "./filterbarmobile";
import SearchForm from "./searchform";

import styles from "./searchheader.module.css";

function SearchHeader() {
  const [searchParams] = useSearchParams();

  const getHeaderTitle = () => {
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1; // Tháng bắt đầu từ 0
    const year = currentDate.getFullYear();
    const date = `${month}/${year}`;

    return `Tuyển dụng, tìm việc làm ${searchParams.get("keyword")} tại ${searchParams.get("location")} - ${date} |
    JobStreet`;
  };
  return (
    <>
      <Helmet>
        <title>{getHeaderTitle()}</title>
      </Helmet>
      <div className={styles.border}>
        <div className={styles.wrapper}>
          <div className={styles.searchFormWrapper}>
            <SearchForm />
          </div>
          <div className={styles.filterBarWrapper}>
            <FilterBar />
          </div>
          <div className={styles.filterBarMobileWrapper}>
            <FilterBarMobile />
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchHeader;
