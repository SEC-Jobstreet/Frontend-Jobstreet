import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Link to="/login">
        <button type="button">Go to Login</button>
      </Link>
    </div>
  );
}

export default App;
