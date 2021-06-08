import React, { useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
        onClick={(e) => e.stopPropagation()}>
        <h1>{project.title}</h1>
        <button
          onClick={(e) => {
            e.stopPropagation();
            updateFrame("left");
          }}
          className="left">
          <FaChevronLeft />
        </button>
        <img src={project.src} alt="project-thumbnail"></img>
        <div className="frame-description">
          <a target="_blank" href={project.github} rel="noreferrer">
            {project.github}
          </a>
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
