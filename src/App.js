import NavBar from "./components/appnav";
import AppRouter from "./components/approuter";
import FilterBar from "./components/filterbar";
import FilterBarMobile from "./components/filterbarmobile";
import Footer from "./components/footer";
import SearchForm from "./components/searchform";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchForm />
      <FilterBar />
      <FilterBarMobile />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
