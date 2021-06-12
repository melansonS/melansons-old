import React, { useState } from "react";
import LightBox from "./Lightbox";
import { projects } from "../utils/constants";

const Gallery = ({ lang, darkTheme }) => {
  const [frame, setFrame] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  const [direction, setDirection] = useState("right");
  const closeModal = () => {
    setShowLightbox(false);
  };

  const handleShowLightBox = (i) => {
    setFrame(i);
    setShowLightbox(true);
  };

  const updateFrame = (d) => {
    const dir = d === "right" ? 1 : -1;
    let newFrame = frame + dir;
    if (newFrame >= projects.length) {
      newFrame = 0;
    } else if (newFrame < 0) {
      newFrame = projects.length - 1;
    }
    setDirection(d);
    setFrame(newFrame);
  };

  return (
    <div className="gallery">
      <div className="projects-container">
        {projects.map((project, i) => {
          return (
            <div key={`project-thumbnail-${project.id}`} className={`project`}>
              <h1>{project.title}</h1>
              <img
                alt={`thumbnail for ${project.title}`}
                onClick={() => handleShowLightBox(i)}
                src={project.src}></img>
              <div className="tech-icon-container">
                <div className="group">
                  {project.tech.map((t) => {
                    return (
                      <div key={`${project.id}-${t.p}`} className="tech-icon">
                        {t.icon}
                        <p className="tooltip">{t.p}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {showLightbox && (
        <LightBox
          project={projects[frame]}
          lang={lang}
          darkTheme={darkTheme}
          closeModal={closeModal}
          updateFrame={updateFrame}
          direction={direction}
        />
      )}
    </div>
  );
};

export default Gallery;
