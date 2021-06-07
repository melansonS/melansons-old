import React from "react";
import { text } from "../utils/constants";
import TypedText from "./TypedText";

import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import { weekDays } from "../utils/constants";

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
        }  projects`}>
        <h1>{text.projects[lang]}</h1>
      </div>
      <div
        id="contact"
        className={`scroll-area${darkTheme ? "--dark" : ""} ${
          section === 4 ? "current-section" : ""
        }  contact`}>
        <div>
          <h1>Go Check out:</h1>
          <div className="what-who">
            <div className="contact-pitch">
              - <b>what</b> I'm working on
              <a
                target="_blank"
                href="https://github.com/melansonS"
                rel="noreferrer">
                <FaGithubSquare />
              </a>
            </div>
            <div className="contact-pitch">
              - <b> who </b> I'm working with
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
              Or Get in touch with me directly!
              <a href="mailto:samuelmelanson@live.com">
                <HiOutlineMail className="email-icon" />
              </a>
            </div>
            <div className="contact-pitch">
              Enjoy the rest of your {weekDays[today.getDay()][lang]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollContainer;
