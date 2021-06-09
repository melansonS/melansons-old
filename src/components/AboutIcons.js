import React from "react";
import {
  SiCss3,
  SiFirebase,
  SiGatsby,
  SiGithub,
  SiGraphql,
  SiHeroku,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiMicrosoftazure,
  SiMongodb,
  SiNetlify,
  SiNodeDotJs,
  SiNpm,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiSass,
  SiTrello,
  SiTypescript,
  SiVisualstudiocode,
} from "react-icons/si";

const AboutIcons = () => {
  return (
    <div className="tech-icon-container">
      <div className="group">
        <div className="tech-icon">
          <SiJavascript />
          <p className="tooltip">Javascript</p>
        </div>
        <div className="tech-icon">
          <SiTypescript />
          <p className="tooltip">Typescript</p>
        </div>
        <div className="tech-icon">
          <SiNodeDotJs />
          <p className="tooltip">Node</p>
        </div>
        <div className="tech-icon">
          <SiReact />
          <p className="tooltip">React</p>
        </div>
        <div className="tech-icon">
          <SiHtml5 />
          <p className="tooltip">HTML</p>
        </div>
        <div className="tech-icon">
          <SiCss3 />
          <p className="tooltip">CSS</p>
        </div>
      </div>

      <div className="group">
        <div className="tech-icon">
          <SiNpm />
          <p className="tooltip">NPM</p>
        </div>
        <div className="tech-icon">
          <SiSass />
          <p className="tooltip">Sass</p>
        </div>
        <div className="tech-icon">
          <SiReactrouter />
          <p className="tooltip">React Router</p>
        </div>
        <div className="tech-icon">
          <SiRedux />
          <p className="tooltip">Redux</p>
        </div>
        <div className="tech-icon">
          <SiGatsby />
          <p className="tooltip">Gatsby</p>
        </div>
        <div className="tech-icon">
          <SiPostgresql />
          <p className="tooltip">Postgres</p>
        </div>
        <div className="tech-icon">
          <SiFirebase />
          <p className="tooltip">Firebase</p>
        </div>
        <div className="tech-icon">
          <SiMongodb />
          <p className="tooltip">Mongo</p>
        </div>
        <div className="tech-icon">
          <SiGraphql />
          <p className="tooltip">GraphQL</p>
        </div>
      </div>

      <div className="group">
        <div className="tech-icon">
          <SiGithub />
          <p className="tooltip">Github</p>
        </div>
        <div className="tech-icon">
          <SiJira />
          <p className="tooltip">Jira</p>
        </div>
        <div className="tech-icon">
          <SiMicrosoftazure />
          <p className="tooltip">Azure</p>
        </div>
        <div className="tech-icon">
          <SiTrello />
          <p className="tooltip">Trello</p>
        </div>
        <div className="tech-icon">
          <SiVisualstudiocode />
          <p className="tooltip">VS Code</p>
        </div>
        <div className="tech-icon">
          <SiPostman />
          <p className="tooltip">Postman</p>
        </div>
        <div className="tech-icon">
          <SiNetlify />
          <p className="tooltip">Netlify</p>
        </div>
        <div className="tech-icon">
          <SiHeroku />
          <p className="tooltip">Heroku</p>
        </div>
      </div>
    </div>
  );
};

export default AboutIcons;
