import React, { useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaGithubSquare,
  FaLink,
} from "react-icons/fa";

const LightBox = ({
  lang,
  darkTheme,
  project,
  updateFrame,
  closeModal,
  direction,
}) => {
  useEffect(() => {
    const modalHotkeys = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
      if (e.key === "ArrowRight") {
        updateFrame("right");
      }
      if (e.key === "ArrowLeft") {
        updateFrame("left");
      }
    };
    window.addEventListener("keyup", modalHotkeys);

    return () => {
      window.removeEventListener("keyup", modalHotkeys);
    };
  }, [closeModal, updateFrame]);

  return (
    <div className="modal-bg" onClick={closeModal}>
      <div
        className={`lightbox${darkTheme ? "--dark" : ""} -${direction}`}
        onClick={(e) => e.stopPropagation()}
        key={project.id}>
        <h1>{project.title}</h1>
        <button
          onClick={(e) => {
            e.stopPropagation();
            updateFrame("left");
          }}
          className="left">
          <FaChevronLeft />
        </button>
        <div className="img-container">
          <div className="icon-links">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className={`${project.darkImg ? "light-anchor" : ""}`}>
              <FaGithubSquare />
            </a>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className={`${project.darkImg ? "light-anchor" : ""}`}>
              <FaLink />
            </a>
          </div>
          <img src={project.src} alt="project-thumbnail"></img>
        </div>
        <div className="frame-description">{project.description[lang]}</div>
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
        <button
          onClick={(e) => {
            e.stopPropagation();
            updateFrame("right");
          }}
          className="right">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default LightBox;
