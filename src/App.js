import { useState, useEffect } from "react";
import Footer from "./components/Footer";
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
  const [darkTheme, setDarkTheme] = useState(false);
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

  useEffect(() => {
    if (isMobile) {
      window.addEventListener("load", function () {
        if (isMobile)
          setTimeout(function () {
            // This hides the address bar:
            window.scrollTo(0, 1);
          }, 0);
      });
    }
    return () => {
      window.removeEventListener("load", function () {
        if (isMobile)
          setTimeout(function () {
            // This hides the address bar:
            window.scrollTo(0, 1);
          }, 0);
      });
    };
  }, [isMobile]);

  useEffect(() => {
    document.querySelector("body").classList = darkTheme ? "body--dark" : "";
  }, [darkTheme]);

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
        isMobile={isMobile}
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
      <Footer />
      {isMobile && <div className={`cover${darkTheme ? "--dark" : ""}`}></div>}
    </div>
  );
}

export default App;
