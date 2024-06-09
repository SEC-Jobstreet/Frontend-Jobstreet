// import { Helmet } from "react-helmet-async";

import { useEffect, useState } from "react";

import SearchForm from "../../components/searchheader/searchform";
import RecentResearch from "../../components/searchresult/recentresearch";
import TrendingJobs from "../../components/trendingjobs";
import { getJobNumber } from "../../services/api";

import styles from "./homepage.module.css";

function Homepage() {
  const [jobNumber, setJobNumber] = useState(0);

  useEffect(() => {
    const loadJobNumber = async () => {
      const respone = await getJobNumber();
      if (respone.status === 200) {
        console.log(respone);
        setJobNumber(respone.data.total);
      }
    };
    loadJobNumber();
  }, []);

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
          Tìm <b>{jobNumber}</b> việc bây giờ
        </p>
      </div>
      <RecentResearch />
      <TrendingJobs />
    </>
  );
}

export default Homepage;
