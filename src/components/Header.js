import React from "react";
import { FaRegMoon, FaSun } from "react-icons/fa";

const Header = ({ darkTheme, handleSetDarkTheme, lang, handleSetLang }) => {
  const toggleLanguage = () => {
    handleSetLang(lang === "en" ? "fr" : "en");
  };
  return (
    <header className={darkTheme ? "header--dark" : ""}>
      <div className="header-container">
        <h1 className="">
          melanson<span className="tomato">S</span>
        </h1>
        <div className="header-buttons">
          <button
            className="toggle-lang"
            title="Toggle Language En/Fr"
            onClick={toggleLanguage}>
            Lang
          </button>
          <button
            onClick={() => handleSetDarkTheme(!darkTheme)}
            title="Toggle Light/Dark Theme"
            className="toggle-theme">
            {darkTheme ? <FaSun /> : <FaRegMoon />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
