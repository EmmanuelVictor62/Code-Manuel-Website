import React, { useRef, useEffect, useState } from "react";

import About from "./Components/About";
import Contact from "./Components/Contact";
import Header from "./Components/Header/index";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";
import Skills from "./Components/Skills";
import Testimonial from "./Components/Testimonial";

import "./_app.scss";

const App = () => {
  const [theme, setTheme] = useState(false);

  const toggleMode = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  return (
    <div className="app" data-toggle={theme}>
      <div className="app__header-wrapper">
        <Header
          name="CodeManuel"
          toggle={theme}
          onclick={toggleMode}
          theme={theme}
        />
      </div>
      <div className="app__home">
        <Home toggle={theme} />
      </div>
      <About toggle={theme} />
      <Services toggle={theme} />
      <Skills toggle={theme} />
      <Portfolio />
      <Testimonial toggle={theme} />
      <Contact toggle={theme} />
    </div>
  );
};

export default App;
