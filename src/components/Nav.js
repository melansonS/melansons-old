import React, { useState } from "react";
import { text } from "../utils/constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";

const Nav = ({ darkTheme, isMobile, lang, section, setSection }) => {
  const [showNav, setShowNav] = useState(false);
  const activeClass = darkTheme ? "active--dark" : "active";

  return (
    <nav
      className={`${darkTheme ? "nav--dark" : ""} ${
        showNav ? "show-nav" : ""
      }`}>
      {isMobile && (
        <div className="mobile-nav-menu-trigger">
          {showNav ? (
            <HiX onClick={() => setShowNav(!showNav)} />
          ) : (
            <HiMenuAlt4 onClick={() => setShowNav(!showNav)} />
          )}
        </div>
      )}
      <a
        onClick={() => setSection(1)}
        className={`${section === 1 ? activeClass : ""}`}
        href="#home">
        {text.home[lang]}
      </a>
      <a
        onClick={() => setSection(2)}
        className={`${section === 2 ? activeClass : ""}`}
        href="#about">
        {text.about[lang]}
      </a>
      <a
        onClick={() => setSection(3)}
        className={`${section === 3 ? activeClass : ""}`}
        href="#projects">
        {text.projects[lang]}
      </a>
      <a
        onClick={() => setSection(4)}
        className={`${section === 4 ? activeClass : ""}`}
        href="#contact">
        {text.contact[lang]}
      </a>
      {isMobile && !showNav && (
        <div className="section-indicator">
          <a
            href="#home"
            onClick={() => setSection(1)}
            className={`indicator ${section === 1 ? "active" : ""}`}
            title={text.home[lang]}>
            .
          </a>
          <a
            href="#about"
            onClick={() => setSection(2)}
            className={`indicator ${section === 2 ? "active" : ""}`}
            title={text.about[lang]}>
            .
          </a>
          <a
            href="#projects"
            onClick={() => setSection(3)}
            className={`indicator ${section === 3 ? "active" : ""}`}
            title={text.projects[lang]}>
            .
          </a>
          <a
            href="#contact"
            onClick={() => setSection(4)}
            className={`indicator ${section === 4 ? "active" : ""}`}
            title={text.contact[lang]}>
            .
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
