import NavBar from "./components/appnav";
import AppRouter from "./components/approuter";
import Login from "./pages/login";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AppRouter />
      <Login />
    </div>
  );
}

export default App;
