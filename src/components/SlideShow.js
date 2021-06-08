import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { projects } from "../utils/constants";
import LightBox from "./Lightbox";

const SlideShow = ({ lang, darkTheme }) => {
  const [frame, setFrame] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const closeModal = () => {
    setShowLightbox(false);
  };

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
        <button onClick={() => setShowLightbox(!showLightbox)}>show</button>
        <button onClick={() => updateFrame("right")} className="right">
          <FaChevronRight />
        </button>
      </div>
      {showLightbox && (
        <LightBox
          project={projects[frame]}
          lang={lang}
          darkTheme={darkTheme}
          closeModal={closeModal}
          updateFrame={updateFrame}
        />
      )}
    </div>
  );
};

export default SlideShow;
