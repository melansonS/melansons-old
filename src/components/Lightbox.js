import React, { useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaGithubSquare,
  FaLink,
} from "react-icons/fa";

const LightBox = ({ lang, darkTheme, project, updateFrame, closeModal }) => {
  useEffect(() => {
    const escapeModal = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
      console.log(e);
    };
    window.addEventListener("keyup", escapeModal);

    return () => {
      window.removeEventListener("keyup", escapeModal);
    };
  }, [closeModal]);

  return (
    <div className="modal-bg" onClick={closeModal}>
      <div
        className={`lightbox${darkTheme ? "--dark" : ""}`}
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
        <div className="frame-description">{project.description}</div>
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
