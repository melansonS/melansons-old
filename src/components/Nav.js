import React from "react";

const Nav = ({ darkTheme, section, setSection }) => {
  const activeClass = darkTheme ? "active--dark" : "active";
  return (
    <nav className={darkTheme ? "nav--dark" : ""}>
      <a
        onClick={() => setSection(1)}
        className={`${section === 1 ? activeClass : ""}`}
        href="#sm">
        Home
      </a>
      <a
        onClick={() => setSection(2)}
        className={`${section === 2 ? activeClass : ""}`}
        href="#about">
        About
      </a>
      <a
        onClick={() => setSection(3)}
        className={`${section === 3 ? activeClass : ""}`}
        href="#projects">
        Projects
      </a>
      <a
        onClick={() => setSection(4)}
        className={`${section === 4 ? activeClass : ""}`}
        href="#contact">
        Contact
      </a>
    </nav>
  );
};

export default Nav;
