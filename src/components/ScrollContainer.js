import React from "react";

import TypedText from "./TypedText";

const ScrollContainer = ({ setSection, section }) => {
  const handleScroll = (e) => {
    if (Math.ceil(e.target.scrollTop / (e.target.scrollHeight / 4)) === 0)
      return;
    if (
      Math.ceil(e.target.scrollTop / (e.target.scrollHeight / 4)) !== section
    ) {
      setSection(Math.ceil(e.target.scrollTop / (e.target.scrollHeight / 4)));
    }
  };
  return (
    <div className="scroll-container" onScroll={handleScroll}>
      <div id="sm" className="scroll-area first">
        <TypedText
          text="Samuel Melanson. "
          subText="Developer "
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
