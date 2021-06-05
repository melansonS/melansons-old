import { useEffect, useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ScrollContainer from "./components/ScrollContainer";

import "./styles/App.css";

function App() {
  const [section, setSection] = useState(1);
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <div className={`App${darkTheme ? "--dark" : ""}`}>
      <Header setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
      <Nav section={section} setSection={setSection} darkTheme={darkTheme} />
      <ScrollContainer
        section={section}
        setSection={setSection}
        darkTheme={darkTheme}
      />
    </div>
  );
}

export default App;
