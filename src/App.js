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
  const [firstLoad, setFirstLoad] = useState(null);

  useEffect(() => {
    console.log(
      "%cH%cey, thanks for checking out my page!",
      "color:tomato;font-weight:bold",
      "font-weight:bold"
    );
    console.log(
      "If you have any feedback or suggestions I'd love to hear it! Feel free to reach out and let me know :D "
    );
    //LOCAL STORAGE
    const storedLang = localStorage.getItem("lang");
    const storedTheme = localStorage.getItem("darkTheme");
    if (!storedLang && !storedTheme) {
      setFirstLoad(Date.now());
    }
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
    if (firstLoad) {
      const now = Date.now();
      const seconds = (now - firstLoad) / 1000;
      if (seconds < 60) {
        console.log(
          `%cIt only took ${Math.round(seconds)} second${
            seconds < 2 ? "" : "s"
          } for you to swith it over to the Dark Theme! 🌙 \n\nAlright, game recognize game `,
          "font-size: 1rem"
        );
      }
      setFirstLoad(null);
    }
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
