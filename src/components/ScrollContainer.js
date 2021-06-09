import React from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { text, weekDays } from "../utils/constants";
import convertText from "../utils/convertText";
import TypedText from "./TypedText";
import Gallery from "./Gallery";
import AboutIcons from "./AboutIcons";

const ScrollContainer = ({ darkTheme, lang, setSection, section }) => {
  const today = new Date(Date.now());
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
        }  home`}>
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
        }  about`}>
        <h1>{text.about[lang]}</h1>
        <p className="about-p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the
        </p>
        <AboutIcons />
      </div>
      <div
        id="projects"
        className={`scroll-area${darkTheme ? "--dark" : ""} ${
          section === 3 ? "current-section" : ""
        }  projects`}>
        <Gallery lang={lang} darkTheme={darkTheme} />
      </div>
      <div
        id="contact"
        className={`scroll-area${darkTheme ? "--dark" : ""} ${
          section === 4 ? "current-section" : ""
        }  contact`}>
        <div>
          <h1>{text.contactTitle[lang]}</h1>
          <div className="what-who">
            <div className="contact-pitch">
              {convertText(text.workingOn[lang])}
              <a
                target="_blank"
                href="https://github.com/melansonS"
                rel="noreferrer">
                <FaGithubSquare />
              </a>
            </div>
            <div className="contact-pitch">
              {convertText(text.workingWith[lang])}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/samuel-melanson/"
                rel="noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="direct-contact">
            <div className="contact-pitch">
              {text.directContact[lang]}
              <a href="mailto:samuelmelanson@live.com">
                <HiOutlineMail className="email-icon" />
              </a>
            </div>
            <div className="contact-pitch">
              {text.greeting[lang]} {weekDays[today.getDay()][lang]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollContainer;
