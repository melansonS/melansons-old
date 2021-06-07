import React from "react";
import { text } from "../utils/constants";
import TypedText from "./TypedText";

const ScrollContainer = ({ darkTheme, lang, setSection, section }) => {
  const handleScroll = (e) => {
    // forces an "even" delay when scrolling up or down before the setSection get's called
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
      <div
        id="home"
        className={`scroll-area${darkTheme ? "--dark" : ""} ${
          section === 1 ? "current-section" : ""
        }  first`}>
        <TypedText
          text="Samuel Melanson. "
          subText={text.developer[lang]}
          delay={800}
          className="typed-sm"
        />
      </div>
      <div
        id="about"
        className={`scroll-area${darkTheme ? "--dark" : ""} ${
          section === 2 ? "current-section" : ""
        }  second`}>
        <h1>{text.about[lang]}</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the
        </p>
      </div>
      <div
        id="projects"
        className={`scroll-area${darkTheme ? "--dark" : ""} ${
          section === 3 ? "current-section" : ""
        }  third`}>
        <h1>{text.projects[lang]}</h1>
      </div>
      <div
        id="contact"
        className={`scroll-area${darkTheme ? "--dark" : ""} ${
          section === 4 ? "current-section" : ""
        }  fourth`}>
        <h1>{text.contact[lang]}</h1>
      </div>
    </div>
  );
};

export default ScrollContainer;
