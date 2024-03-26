import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

function JobItem({ data }) {
  const { title } = data;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

JobItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    // Thêm các kiểu dữ liệu khác nếu cần
  }).isRequired,
};

export default JobItem;
