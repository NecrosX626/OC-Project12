//React Imports
import { useRef } from "react";
//Components Imports
import Lobby from "./assets/components/Lobby";
import Works from "./assets/components/Works";
import Experience from "./assets/components/Experience";
import Skills from "./assets/components/Skills";
import Navbar from "./assets/components/Navbar";
import Contact from "./assets/components/Contact";
//Styles Imports
import "./assets/styles/style.css";
//import "normalize.css";

function App() {
  const lobbyRef = useRef(null);
  const worksRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="app" id="app">
      <Lobby lobbyRef={lobbyRef} />
      <Works worksRef={worksRef} />
      <Experience experienceRef={experienceRef} />
      <Skills />
      <Contact contactRef={contactRef} />
      <Navbar
        lobbyRef={lobbyRef}
        worksRef={worksRef}
        experienceRef={experienceRef}
        contactRef={contactRef}
      />
    </div>
  );
}

export default App;
