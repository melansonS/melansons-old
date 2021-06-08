import React, { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { ImSun } from "react-icons/im";
import { text } from "../utils/constants";
import sleep from "../utils/sleep";

const Header = ({
  darkTheme,
  handleSetDarkTheme,
  lang,
  handleSetLang,
  isMobile,
}) => {
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const firstLoad = async () => {
      await sleep(3000);
      setTyping(false);
    };
    firstLoad();
  }, []);

  const toggleLanguage = async () => {
    handleSetLang(lang === "en" ? "fr" : "en");
    setTyping(true);
    await sleep(3000);
    setTyping(false);
  };

  return (
    <header className={darkTheme ? "header--dark" : ""}>
      <div className="header-container">
        <h1 className="">
          <a href="/">
            melanson<span className="pop">S</span>
          </a>
        </h1>
        <div className="header-buttons">
          <button
            disabled={typing}
            className="toggle-lang"
            title={text.toggleLang[lang]}
            onClick={toggleLanguage}>
            {isMobile
              ? lang === "en"
                ? "Fr"
                : "En"
              : lang === "en"
              ? "Français"
              : "English"}
          </button>
          <button
            onClick={() => handleSetDarkTheme(!darkTheme)}
            title={text.toggleTheme[lang]}
            className="toggle-theme">
            {darkTheme ? <ImSun /> : <FaRegMoon />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
