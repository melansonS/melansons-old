import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ScrollContainer from "./components/ScrollContainer";

import "./styles/App.css";

function App() {
  const [section, setSection] = useState(1);
  return (
    <div className="App">
      <Header />
      <Nav section={section} setSection={setSection} />
      <ScrollContainer section={section} setSection={setSection} />
    </div>
  );
}

export default App;
