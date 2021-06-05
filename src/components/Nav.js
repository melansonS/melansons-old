import React from "react";

const Nav = ({ section, setSection }) => {
  return (
    <nav>
      <a
        onClick={() => setSection(1)}
        className={`${section === 1 ? "active" : ""}`}
        href="#sm">
        melansons
      </a>
      <a
        onClick={() => setSection(2)}
        className={`${section === 2 ? "active" : ""}`}
        href="#about">
        About
      </a>
      <a
        onClick={() => setSection(3)}
        className={`${section === 3 ? "active" : ""}`}
        href="#projects">
        Projects
      </a>
      <a
        onClick={() => setSection(4)}
        className={`${section === 4 ? "active" : ""}`}
        href="#contact">
        Contact
      </a>
    </nav>
  );
};

export default Nav;
