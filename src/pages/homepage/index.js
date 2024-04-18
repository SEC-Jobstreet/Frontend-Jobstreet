// import { Helmet } from "react-helmet";

import SearchForm from "../../components/searchheader/searchform";
import RecentResearch from "../../components/searchresult/recentresearch";
import TrendingJobs from "../../components/trendingjobs";

import styles from "./homepage.module.css";

function Homepage() {
  return (
    <>
      {/* <Helmet>
        <title>
          Tìm việc tại trang tìm kiếm việc làm số 1 Việt Nam | JobStreet
        </title>
      </Helmet> */}
      <div className={styles.searchContainer}>
        <SearchForm />
        <p className={styles.jobNumber}>
          Tìm <b>65.362</b> việc bây giờ
        </p>
      </div>
      <RecentResearch />
      <TrendingJobs />
    </>
  );
}

export default Homepage;
