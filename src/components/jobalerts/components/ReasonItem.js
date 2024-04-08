export default function ReasonData(props) {
  const { id, title, expand, currentSelected, onCheckedHandler } = props;

  const onClickHandler = () => {
    onCheckedHandler(id);
  };
  return (
    <li className="reason">
      <div className="basic-info">
        <input
          type="radio"
          id={id}
          name="reason-item"
          onClick={onClickHandler}
        />
        <label htmlFor={id}>{title}</label>
      </div>
      {expand && currentSelected === id && (
        <div className="expand-info">
          <input className="email-alert" placeholder="Tên" />
          <textarea
            className="email-alert"
            placeholder="Chia sẻ kinh nghiệm của bạn"
          />
          <div>
            <label htmlFor={`expand-inoout-${id}`} className="expand">
              <input type="checkbox" id={`expand-inoout-${id}`} />
              Chia sẻ với mọi người
            </label>
          </div>
        </div>
      )}
    </li>
  );
}
