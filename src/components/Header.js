import React from "react";
import { FaRegMoon, FaSun } from "react-icons/fa";

const Header = ({ darkTheme, setDarkTheme }) => {
  return (
    <header className={darkTheme ? "header--dark" : ""}>
      <div className="header-container">
        <h1 className="">
          melanson<span className="tomato">S</span>
        </h1>
        <div className="header-buttons">
          <button className="toggle-lang" title="Toggle Language En/Fr">
            Lang
          </button>
          <button
            onClick={() => setDarkTheme(!darkTheme)}
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
