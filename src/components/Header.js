import React from "react";
import { FaRegMoon } from "react-icons/fa";
import { ImSun } from "react-icons/im";

const Header = ({ darkTheme, handleSetDarkTheme, lang, handleSetLang }) => {
  const toggleLanguage = () => {
    handleSetLang(lang === "en" ? "fr" : "en");
  };
  return (
    <header className={darkTheme ? "header--dark" : ""}>
      <div className="header-container">
        <h1 className="">
          <a href="/">
            melanson<span className="tomato">S</span>
          </a>
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
            {darkTheme ? <ImSun /> : <FaRegMoon />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
