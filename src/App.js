import NavBar from "./components/appnav";
import AppRouter from "./components/approuter";
import FilterBar from "./components/filterbar";
import FilterBarMobile from "./components/filterbarmobile";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AppRouter />
      <FilterBar />
      <FilterBarMobile />
    </div>
  );
}

export default App;
