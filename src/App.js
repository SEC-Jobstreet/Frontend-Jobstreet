import NavBar from "./components/appnav";
import AppRouter from "./components/approuter";
import TrendingJobs from "./components/trendingjobs";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AppRouter />
      <TrendingJobs />
    </div>
  );
}

export default App;
