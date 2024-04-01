import NavBar from "./components/appnav";
import AppRouter from "./components/approuter";
import Register from "./pages/register";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AppRouter />
      <Register />
    </div>
  );
}

export default App;
