import { useTranslation } from "react-i18next";

import Counter from "./components/counter/counter";
import i18n from "./config/i18n";
import logo from "./logo.svg";

import "./App.css";

function App() {
  const { t } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Counter />

      <div>
        <h2>{t("welcome")}</h2>
        <p>{t("description")}</p>
        <button
          type="button"
          onClick={() => changeLanguage("en")}
          style={{ whiteSpace: "pre-line" }}
        >
          English
        </button>
        <button
          type="button"
          onClick={() => changeLanguage("vi")}
          style={{ whiteSpace: "pre-line" }}
        >
          Vietnamese
        </button>
      </div>
    </div>
  );
}

export default App;
