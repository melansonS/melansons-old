import React from "react";
import { text } from "../utils/constants";
import TypedText from "./TypedText";

const ScrollContainer = ({ lang, setSection, section }) => {
  const handleScroll = (e) => {
    // forces an even delay when scrolling up or down before the setSection get's called
    if (
      Math.round(e.target.scrollTop / (e.target.scrollHeight / 4) + 1) ===
      section
    ) {
      return;
    }

    if (
      Math.ceil(e.target.scrollTop / (e.target.scrollHeight / 4)) !== section
    ) {
      setSection(
        Math.floor(e.target.scrollTop / (e.target.scrollHeight / 4)) + 1
      );
    }
  };

  return (
    <div className="scroll-container" onScroll={handleScroll}>
      <div id="sm" className="scroll-area first">
        <TypedText
          text="Samuel Melanson. "
          subText={text.developer[lang]}
          delay={800}
          className="typed-sm"
        />
      </div>
      <div id="about" className="scroll-area second">
        <p>About</p>
      </div>
      <div id="projects" className="scroll-area third">
        <p>Projects</p>
      </div>
      <div id="contact" className="scroll-area fourth">
        <p>contact</p>
      </div>
    </div>
  );
};

export default ScrollContainer;
