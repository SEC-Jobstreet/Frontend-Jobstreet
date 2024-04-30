import React, { Fragment } from "react";
import { Button, Col, Container, Pagination } from "react-bootstrap";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import { getJobList } from "../../services/api";

import { StateProvider } from "./context";
import EmailAlert from "./emailalert";
import JobDescription from "./jobdescription";
import JobItem from "./jobitem";
import PersonalizedTags from "./personalizedTags";
import RecentResearch from "./recentresearch";
import RelatedResearch from "./relatedsearches";

import styles from "./joblisting.module.css";

const ITEM_PER_PAGE = 4;
const MAX_PAGES_LISTED = 7;

function JobListing() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [totalCount, setTotalCount] = React.useState(0);
  const [jobsListed, setJobsListed] = React.useState([]);
  const [pages, setPages] = React.useState({
    current: 0,
    total: 0,
    start: 0,
    end: 0,
  });
  const [activeTag, setActiveTag] = React.useState(null);
  const [activeJob, setAvticeJob] = React.useState(null);

  const keyword = searchParams.get("keyword");
  const address = searchParams.get("location");

  const getJobListFunc = async () => {
    const request = {
      keyword,
      location: address,
      pageId: searchParams.get("page") || 1,
      pageSize: ITEM_PER_PAGE, // default
    };
    const response = await getJobList(request);
    console.log(response);
    if (response.status === 200) {
      setAvticeJob(null);
      setJobsListed(response.data.jobs);
      setTotalCount(response.data.total);

      const totalPageNumber = Math.ceil(
        (1.0 * parseInt(response.data.total, 10)) / ITEM_PER_PAGE
      );
      setPages({
        current: response.data.page_id - 1,
        total: totalPageNumber,
        start: 0,
        end:
          totalPageNumber < MAX_PAGES_LISTED
            ? totalPageNumber
            : MAX_PAGES_LISTED - 1,
      });
      window.scrollTo(0, 0);
    }
  };

  React.useEffect(() => {
    getJobListFunc();
  }, [location]);

  const changePage = (page) => {
    navigate(`/search?keyword=${keyword}&location=${address}&page=${page}`);
  };

  const handlePageNumberClick = (e) => {
    const newPage = e.target.text;
    changePage(parseInt(newPage, 10));
  };

  const handleNextButtonClick = () => {
    if (pages.current !== pages.total - 1) {
      changePage(pages.current + 2);
    }
  };

  const handlePreviousButtonClick = () => {
    if (pages.current !== 0) {
      changePage(pages.current);
    }
  };

  const handleTagButtonClick = (e) => {
    const newTag = e.target.innerText;

    if (newTag !== activeTag) {
      setActiveTag(newTag);
    } else {
      setActiveTag(null);
    }
  };

  const handleJobItemClick = (value) => {
    setAvticeJob(value);
  };

  return (
    <StateProvider>
      <Container className={styles.wrapper}>
        <Col>
          <div className={styles.topPanel}>
            <div
              className="text-start"
              style={{ fontSize: "1.54rem", marginBottom: "1rem" }}
            >
              <p style={{ fontSize: "1.6rem" }}>
                <b>{totalCount} việc làm </b>–{" "}
                {address === "" ? (
                  "tất cả"
                ) : (
                  <>
                    tại <b>{address}</b>
                  </>
                )}
              </p>
              <p>
                Trang
                <b> {pages.current + 1} </b>
                của
                <b> {pages.total}</b>
              </p>
            </div>
            <div className={styles.personalizedTags}>
              {PersonalizedTags.map((tag) => (
                <Button
                  className={
                    activeTag === tag.tagName
                      ? `${styles.tagButton} ${styles.active}`
                      : `${styles.tagButton}`
                  }
                  onClick={handleTagButtonClick}
                  key={tag.tagName}
                >
                  {tag.tagName}
                </Button>
              ))}
            </div>
          </div>
          <div className={styles.jobList}>
            {jobsListed.map((job, index) => {
              if ((index + 1) % 6 === 0) {
                return (
                  <Fragment key={job.id * -1}>
                    <EmailAlert />
                    <Fragment key={job.id}>
                      <JobItem
                        data={job}
                        activeItem={activeJob}
                        handleClick={handleJobItemClick}
                      />
                    </Fragment>
                  </Fragment>
                );
              }
              return (
                <Fragment key={job.id}>
                  <JobItem
                    data={job}
                    activeItem={activeJob}
                    handleClick={handleJobItemClick}
                  />
                </Fragment>
              );
            })}
          </div>
          <Pagination className={styles.paginationContainer}>
            <div className={styles.fullPagination}>
              <Pagination.Prev
                onClick={handlePreviousButtonClick}
                className={pages.current === 0 ? "visually-hidden" : ""}
              >
                <b>Trước</b>
              </Pagination.Prev>
              {[...Array(pages.end - pages.start)].map((item, index) => {
                const page = pages.start + index + 1;
                return (
                  <Fragment key={page}>
                    <Pagination.Item
                      onClick={handlePageNumberClick}
                      className={
                        page === pages.current + 1
                          ? `${styles.pageCurrent} ${styles.pageItem}`
                          : `${styles.pageItem}`
                      }
                    >
                      {page}
                    </Pagination.Item>
                  </Fragment>
                );
              })}
              <Pagination.Next
                onClick={handleNextButtonClick}
                className={
                  pages.current === pages.total - 1 ? "visually-hidden" : ""
                }
              >
                <b>Kế tiếp</b>
              </Pagination.Next>
            </div>
            <div className={styles.smallPagination} style={{ display: "none" }}>
              <Pagination.Next onClick={handleNextButtonClick}>
                <b>Kế tiếp</b>
              </Pagination.Next>
            </div>
          </Pagination>
          <RecentResearch />
          <RelatedResearch />
        </Col>
        <Col style={{ alignSelf: "stretch" }} className={styles.jobDescription}>
          <JobDescription
            data={
              activeJob === null
                ? null
                : jobsListed.find((e) => e.id === activeJob)
            }
          />
        </Col>
      </Container>
    </StateProvider>
  );
}

export default JobListing;
