import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ScrollContainer from "./components/ScrollContainer";

import "./styles/App.css";

function App() {
  const [section, setSection] = useState(1);
  const [darkTheme, setDarkTheme] = useState(true);
  const [lang, setLang] = useState("en");
  return (
    <div className={`App${darkTheme ? "--dark" : ""}`}>
      <Header
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
        lang={lang}
        setLang={setLang}
      />
      <Nav
        darkTheme={darkTheme}
        lang={lang}
        section={section}
        setSection={setSection}
      />
      <ScrollContainer
        darkTheme={darkTheme}
        lang={lang}
        section={section}
        setSection={setSection}
      />
    </div>
  );
}

export default App;
