import "./style.css";

const Dates = ["M", "T", "W", "T", "F", "S", "S"];

function TimeAvailable(props) {
  const { particularTime } = props;
  return (
    <div>
      <p>Thời gian bạn có thể làm việc:</p>
      {/* thứ ngày */}
      <div style={{ display: "flex" }}>
        <div className="time-available-containter">
          <div style={{ width: "5rem" }} />
          {Dates.map((date, index) => (
            <div className="item" key={date + index.toString()}>
              {date}
            </div>
          ))}
        </div>
      </div>

      {/* sáng */}
      <div style={{ display: "flex" }}>
        <div className="time-available-containter">
          <div style={{ width: "5rem", fontSize: "1.4rem", textAlign: "left" }}>
            Sáng
          </div>
          {particularTime[0].map((value, index) => (
            <div className="item" key={`A${index.toString()}`}>
              <div className={`check -${value.toString()}`} />
            </div>
          ))}
        </div>
      </div>
      {/* chiều */}
      <div style={{ display: "flex" }}>
        <div className="time-available-containter">
          <div style={{ width: "5rem", fontSize: "1.4rem", textAlign: "left" }}>
            Chiều
          </div>
          {particularTime[1].map((value, index) => (
            <div className="item" key={`A${index.toString()}`}>
              <div className={`check -${value.toString()}`} />
            </div>
          ))}
        </div>
      </div>
      {/* tối */}
      <div style={{ display: "flex" }}>
        <div className="time-available-containter">
          <div style={{ width: "5rem", fontSize: "1.4rem", textAlign: "left" }}>
            Tối
          </div>
          {particularTime[2].map((value, index) => (
            <div className="item" key={`A${index.toString()}`}>
              <div className={`check -${value.toString()}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default TimeAvailable;
