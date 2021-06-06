import { useState, useEffect } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ScrollContainer from "./components/ScrollContainer";
import { breakpoints } from "./utils/constants";

import "./styles/App.css";

function App() {
  const [section, setSection] = useState(1);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < breakpoints.mobile
  );
  const [darkTheme, setDarkTheme] = useState(true);
  const [lang, setLang] = useState("en");

  useEffect(() => {
    //LOCAL STORAGE
    const storedLang = localStorage.getItem("lang");
    const storedTheme = localStorage.getItem("darkTheme");
    if (storedLang === "en" || storedLang === "fr") {
      setLang(storedLang);
    }
    if (storedTheme === "true" || storedTheme === "false") {
      setDarkTheme(storedTheme === "true");
    }

    // ISMOBILE / window.innerWidth
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setIsMobile(window.innerWidth < breakpoints.mobile);
  };

  const handleSetLang = (lang) => {
    localStorage.setItem("lang", lang);
    setLang(lang);
  };

  const handleSetDarkTheme = (bool) => {
    localStorage.setItem("darkTheme", bool);
    setDarkTheme(bool);
  };

  return (
    <div className={`App${darkTheme ? "--dark" : ""}`}>
      <Header
        darkTheme={darkTheme}
        handleSetDarkTheme={handleSetDarkTheme}
        lang={lang}
        handleSetLang={handleSetLang}
      />
      <Nav
        darkTheme={darkTheme}
        isMobile={isMobile}
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
