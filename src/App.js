import React from "react";

// import UploadFiles from "./components/UploadFileComponent";
import BarChartComponent from "./components/BarChartComponent";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container" style={{ width: "600px" }}>
      <header className="App-header">
        <h1>Biểu Đồ Bình Chọn</h1>
        <p>Hãy xem số lượng bình chọn theo tháng dưới đây.</p>
      </header>
      <div className="App-body">
        <BarChartComponent />
      </div>
      <footer className="App-footer">
        <p>Biểu đồ được cung cấp bởi React ChartJS-2.</p>
      </footer>
    </div>
    // <div className="container" style={{ width: "600px" }}>
    //   <div style={{ margin: "20px 0" }}>
    //     <h4>Sơ yếu lý lịch</h4>
    //   </div>

    //   <UploadFiles />
    // </div>
  );
}

export default App;
