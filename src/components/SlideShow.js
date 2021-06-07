import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { projects } from "../utils/constants";

const SlideShow = ({ lang, darkTheme }) => {
  const [frame, setFrame] = useState(0);

  const updateFrame = (direction) => {
    const dir = direction === "right" ? 1 : -1;
    let newFrame = frame + dir;
    if (newFrame >= projects.length) {
      newFrame = 0;
    } else if (newFrame < 0) {
      newFrame = projects.length - 1;
    }

    setFrame(newFrame);
  };

  return (
    <div className="slideshow-container">
      <h1 className="frame-description" key={frame + 1000}>
        {projects[frame].title}
      </h1>
      <div className="slideshow">
        <button onClick={() => updateFrame("left")} className="left">
          <FaChevronLeft />
        </button>
        <a
          href={projects[frame].url}
          target="_blank"
          className="frame"
          rel="noreferrer">
          <img
            src={projects[frame].src}
            alt="t"
            key={`frame-${frame}`}
            className={darkTheme ? "img--dark" : ""}></img>
        </a>
        <button onClick={() => updateFrame("right")} className="right">
          <FaChevronRight />
        </button>
      </div>
      <div className="frame-description" key={frame}>
        <a target="_blank" href={projects[frame].github} rel="noreferrer">
          {projects[frame].github}
        </a>
      </div>
    </div>
  );
};

export default SlideShow;
