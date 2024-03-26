import { Col, Container } from "react-bootstrap";

import JobItem from "../../components/SearchResult/JobItem";

import { sampleJob } from "./sampleData";

import styles from "./Search.module.css";

function Search() {
  return (
    <Container className={styles.wrapper}>
      <Col>
        {/* {SearchResult.map((job) => (
          <JobItem data={job} />
        ))} */}
        <JobItem data={sampleJob} />
      </Col>
      <Col>
        <h2>job detail</h2>
      </Col>
    </Container>
  );
}

export default Search;
