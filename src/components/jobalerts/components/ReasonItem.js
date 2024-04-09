import { Form } from "react-bootstrap";

export default function ReasonData(props) {
  const { id, title, expand, currentSelected, onCheckedHandler } = props;

  const onClickHandler = () => {
    onCheckedHandler(id);
  };
  return (
    <li className="reason">
      <Form.Group className="basic-info">
        <input
          type="radio"
          id={id}
          name="reason-item"
          onClick={onClickHandler}
        />
        <Form.Label htmlFor={id}>{title}</Form.Label>
      </Form.Group>
      {expand && currentSelected === id && (
        <Form.Group className="expand-info">
          <Form.Control className="email-alert" placeholder="Tên" />
          <Form.Control
            as="textarea"
            className="email-alert"
            placeholder="Chia sẻ kinh nghiệm của bạn"
          />
          <div>
            <Form.Label htmlFor={`expand-inoout-${id}`} className="expand">
              <input type="checkbox" id={`expand-inoout-${id}`} />
              Chia sẻ với mọi người
            </Form.Label>
          </div>
        </Form.Group>
      )}
    </li>
  );
}
